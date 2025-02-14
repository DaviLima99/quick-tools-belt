import Navbar from "./Navbar";
import Seo from "./Seo";


interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Seo title="Quick Tools Belt" description='Sua plaataforma de ferramentas' />
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layout;