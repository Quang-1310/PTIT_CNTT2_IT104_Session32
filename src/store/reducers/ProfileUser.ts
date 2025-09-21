interface Profile {
    id: number;
    name: string;
    gender: string;
    dateofbirth: string;
    address: string;
}

const initialState: Profile = {
    id: 1,
    name: "Nguyễn Văn Nam",
    gender: "Nam",
    dateofbirth: "20/3/2023",
    address: "Thanh Xuân, Hà Nội"
}

export const profileUser = (state = initialState) => {
    return state;
}