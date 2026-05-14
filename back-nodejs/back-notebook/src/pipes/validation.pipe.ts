import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass, plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "src/exceptions/validation.exception";

@Injectable()
export class ValidationPipe implements PipeTransform<any>{
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {

        if ( !value ) return value;
        if ( typeof value !== 'object') return value;

        const obj = plainToInstance(metadata.metatype as any, value);

        const errors = await validate(obj);

        if ( errors.length && errors.length > 0 ) {

            let messages = errors.map(err => {
                return `${err.property ? err.property : 'undefined'} - ${Object.values(err.constraints || '').join(', ')}`;
            });

            messages = messages.filter(message => !message.startsWith('undefined'));

            if (messages.length > 0) {
                throw new ValidationException(messages);
            }
        }

        return value;
    }
}