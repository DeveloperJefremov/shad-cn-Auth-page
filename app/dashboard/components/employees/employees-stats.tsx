import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import cm from '@/public/images/cm.jpg';
import {
	AlertTriangleIcon,
	BadgeCheckIcon,
	LaptopIcon,
	PartyPopperIcon,
	UserCheck2Icon,
	UserIcon,
	UserRoundX,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import WorkLocationTrends from './work-location-trends';

export default function EmployeesStats() {
	const totalEmployees = 126;
	const employeesPresent = 98;
	const employeesPresentPercentage = parseFloat(
		((employeesPresent / totalEmployees) * 100).toFixed(0)
	);

	return (
		<>
			<div className='grid lg:grid-cols-3 gap-4'>
				<Card>
					<CardHeader className='pb-2'>
						<CardTitle className='text-base'>Total employees</CardTitle>
					</CardHeader>
					<CardContent className='flex justify-between items-center'>
						<div className='flex gap-2'>
							<UserIcon />
							<span className='text-5xl font-bold'>{totalEmployees}</span>
						</div>
						<div>
							<Button size='xs' asChild>
								<Link href='/dashboard/employees'>See all</Link>
							</Button>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='pb-2'>
						<CardTitle className='text-base'>Employees present</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='flex gap-2'>
							{employeesPresentPercentage > 75 ? (
								<UserCheck2Icon />
							) : (
								<UserRoundX />
							)}

							<span className='text-5xl font-bold'>{employeesPresent}</span>
						</div>
					</CardContent>
					<CardFooter>
						{employeesPresentPercentage > 75 ? (
							<span className='text-xs text-green-400 flex gap-1 item-center'>
								<BadgeCheckIcon />
								{employeesPresentPercentage}% of employees are present
							</span>
						) : (
							<span className='text-xs text-red-500 flex gap-1 item-center'>
								<AlertTriangleIcon />
								Only {employeesPresentPercentage}% of employees are present
							</span>
						)}
					</CardFooter>
				</Card>
				<Card className='border-green-500 flex flex-col'>
					<CardHeader className='pb-2'>
						<CardTitle className='text-base'>Employee of the month</CardTitle>
					</CardHeader>
					<CardContent className='flex gap-2 items-center'>
						<Avatar>
							<Image src={cm} alt='Employee of the month' />
							<AvatarFallback>MS</AvatarFallback>
						</Avatar>
						<span className='text-2xl'>Maksim Scerbuk!</span>
					</CardContent>
					<CardFooter className='flex gap-2 items-center text-xs text-muted-foreground mt-auto'>
						<PartyPopperIcon className='text-green-500' />
						<span>Congratulations, Maksim!</span>
					</CardFooter>
				</Card>
			</div>
			<Card className='my-4'>
				<CardHeader>
					<CardTitle className='tet-lb flex items-center gap-2'>
						<LaptopIcon />
						<span>Employee work location trends</span>
					</CardTitle>
				</CardHeader>
				<CardContent className='pl-0'>
					<WorkLocationTrends />
				</CardContent>
			</Card>
		</>
	);
}
