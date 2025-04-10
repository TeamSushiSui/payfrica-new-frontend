import { Navigation, Balances, QuickActions, SavingsCircle, TransactionHistory, SendMoneyOverlay, PayfricaPadiOverlay, EnterAmountOverlay, SendingOverlay, FeedbackOverlay, SuccessOverlay, FailedOverlay, SendSuiTokenOverlay, PayfricaPadiSuiOverlay, EnterSuiAmountOverlay, SendSuiToWAOverlay } from '@/imports';

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
            <SendSuiToWAOverlay />
        </div>
    )
}

export default Dashboard;