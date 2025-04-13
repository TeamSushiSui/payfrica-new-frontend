import { Navigation, Balances, QuickActions, SavingsCircle, TransactionHistory, SendMoneyOverlay, PayfricaPadiOverlay, EnterAmountOverlay, SendingOverlay, FeedbackOverlay, SuccessOverlay, FailedOverlay, SendSuiTokenOverlay, PayfricaPadiSuiOverlay, EnterSuiAmountOverlay, SendSuiToWAOverlay, ReceiveMoneyOverlay, ReceiveCardOverlay } from '@/imports';

const Dashboard = () => {
    return (
        <div>
            <Navigation />
            <Balances />
            <QuickActions />
            <SavingsCircle />
            <TransactionHistory />
            <SendMoneyOverlay />
            <PayfricaPadiOverlay />
            <EnterAmountOverlay />
            {/* Sending Overlay */}
            <SendingOverlay />
            <FeedbackOverlay />
            <SuccessOverlay />
            <FailedOverlay />
            <SendSuiTokenOverlay />
            <PayfricaPadiSuiOverlay />
            <EnterSuiAmountOverlay />
            <SendSuiToWAOverlay />
            {/* Receiving Overlay */}
            <ReceiveMoneyOverlay />
            <ReceiveCardOverlay />
        </div>
    )
}

export default Dashboard;