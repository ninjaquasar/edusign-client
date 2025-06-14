import Lottie from "lottie-react";
import SuccessLottie from "../assets/lotties/authenticateSuccess.json";

const SignInSuccess = () => {
	return (
		<main className="pt-28 pb-12">
			<Lottie
				animationData={SuccessLottie}
				className="mx-auto w-sm aspect-square"
			/>
		</main>
	);
};

export default SignInSuccess;
