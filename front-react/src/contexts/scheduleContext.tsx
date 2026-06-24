import { createContext, useState } from "react";

interface IScheduleContext {
    selectedUserId: number;
    changeScheduleUserId: (id: number) => void;
}

export const ScheduleContext = createContext<IScheduleContext>({selectedUserId: 0, changeScheduleUserId: () => {} });

const ScheduleContextProvider = ({children}) => {
    const [selectedUserId, setSelectedUserId] = useState<number>(0);

    const changeScheduleUserId = (id: number) => {
        setSelectedUserId(id);
    }

    return (
        <ScheduleContext.Provider value={{selectedUserId, changeScheduleUserId}}>
            {children}
        </ScheduleContext.Provider>
    )
}

export default ScheduleContextProvider;