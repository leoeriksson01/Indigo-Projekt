import { useLocation } from 'react-router-dom';

export default function CheckoutConfirm() {
    // Don't forget to use cart context in here
    const { state } = useLocation();
    return (
        <div>
            Name: {state.name}
        </div>
    );
}
