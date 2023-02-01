import "src/styles/global.css";
import Navbar from "src/layouts/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="es">
			<head/>
			<body>
				<Navbar/>
				{children}
			</body>
		</html>
	)
}

export default RootLayout;