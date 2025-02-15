import Navbar from "./Navbar";
import Seo from "./Seo";


interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <div className="bg-slate-900">
                <Navbar/>
                {children}
            </div>
        </>
    )
}

export default Layout;