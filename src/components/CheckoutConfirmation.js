import { useLocation } from 'react-router-dom';

export default function CheckoutConfirmation() {
    // Don't forget to use cart context in here
    const { state } = useLocation();
    return (
        <div>
            Name: {state.name}
        </div>
    );
}
