import {UserListItem} from "./UserListItem";
import {UserListEndPoints} from "../../store/api/UserListApi";

export const UserList = (props) => {
    console.log(UserListEndPoints.getUserList.useQuery(1))
    const {data: userList, isFetching, isLoading} = UserListEndPoints.getUserList.useQuery(1)

    if (isLoading || isFetching) return (<div></div>)

    return (
        <div>
            {
                userList.data.map((_, idx) => {
                    return <UserListItem
                        key={idx}
                        idx={idx}>
                    </UserListItem>
                })
            }
        </div>
    );
};