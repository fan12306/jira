export interface User {
    id: string,
    name: string,
    email: string,
    origination: string,
    title: string
}

interface SearchPanelProps {
    users: User[]
    params: {
        name: string,
        userId: string
    },
    setParams: (params: SearchPanelProps["params"]) => void
}


export default ({params, setParams, users}: SearchPanelProps) => {

    return <form>
        <div>
            <input type="text" value={params.name} onChange={(evt) => {
                setParams({...params, name: evt.target.value})
            }}/>

            <select value={params.userId} onChange={(evt) => {
                setParams({...params, userId: evt.target.value})
            }}>
                <option value="">负责人</option>
                {
                    users.map(user => <option value={user.id} key={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}