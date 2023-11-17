import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"

const Page = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if (!user || !user.id) redirect('/auth-callback?origin=dashboard')


    

    // Check if user is null before accessing its properties
    // if (user === null) {
    //     return <div>Loading...</div>; // or handle the null case appropriately
    // }

    return (
        <div>{user.email}</div>
    )
}

export default Page
