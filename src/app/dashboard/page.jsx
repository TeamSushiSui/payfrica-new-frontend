import { Navigation, Balances, QuickActions, SavingsCircle, TransactionHistory, SendMoneyOverlay } from '@/imports';

const Dashboard = () => {
    return (
        <div>
            <Navigation />
            <Balances />
            <QuickActions />
            <SavingsCircle />
            <TransactionHistory />
            <SendMoneyOverlay />
        </div>
    )
}

export default Dashboard;