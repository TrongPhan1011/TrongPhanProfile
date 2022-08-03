import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="w-full">{children}</div>
        </div>
    );
}

export default DefaultLayout;
