import {UserListEndPoints} from "../../store/api/UserListApi";

export const UserListItem = (props) => {
    const {data:userList, isFetching, isLoading} = UserListEndPoints.getUserList.useQueryState(1);

    if(isFetching || isLoading) return (<div></div>)
    console.log(userList)
    return (
        <div>
            {userList.data[Number(props.idx)].name}
        </div>
    );
};

