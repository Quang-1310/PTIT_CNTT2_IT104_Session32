interface UserType {
    id: number;
    name: string;
    gender: string;
    dateofbirth: string;
    address: string;
}

const initialState: UserType[] = [
    {    
        id: 1,
        name: "Nguyễn Văn Nam",
        gender: "Nam",
        dateofbirth: "20/3/2023",
        address: "Thanh Xuân, Hà Nội"
    },
    {
        id: 2,
        name: "Nguyễn Thị B",
        gender: "Nữ",
        dateofbirth: "20/3/2023",
        address: "Thanh Xuân, Hà Nội"
    }
]

export const listUserReducer = ((state = initialState) => state);