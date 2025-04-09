import { Navigation, Balances, QuickActions, SavingsCircle, TransactionHistory, SendMoneyOverlay, PayfricaPadiOverlay, EnterAmountOverlay, SendingOverlay, FeedbackOverlay, SuccessOverlay, FailedOverlay, SendSuiTokenOverlay, PayfricaPadiSuiOverlay, EnterSuiAmountOverlay } from '@/imports';

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
            <SendingOverlay />
            <FeedbackOverlay />
            <SuccessOverlay />
            <FailedOverlay />
            <SendSuiTokenOverlay />
            <PayfricaPadiSuiOverlay />
            <EnterSuiAmountOverlay />
        </div>
    )
}

export default Dashboard;