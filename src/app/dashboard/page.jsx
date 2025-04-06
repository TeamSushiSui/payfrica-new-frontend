import { Navigation, Balances, QuickActions, SavingsCircle, TransactionHistory } from '@/imports';

const Dashboard = () => {
    return (
        <div>
            <Navigation />
            <Balances />
            <QuickActions />
            <SavingsCircle />
            <TransactionHistory />
        </div>
    )
}

export default Dashboard;