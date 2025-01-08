import { User } from "@/state/api";
import Image from "next/image";

type Props = {
    user: User;
};

const UserCard = ({ user }: Props) => {
    return (
        <div className="mb-4 rounded-lg bg-white p-6 dark:bg-dark-secondary dark:text-white transition-colors">
            {user.profilePictureUrl && (
                <div className="mb-4">
                    <Image
                        src={`/${user.profilePictureUrl}`}
                        alt={user.username ? `${user.username}'s profile` : `profile picture url`}
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                </div>
            )}
            <div className="space-y-2">
                <p className="text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">Username:</strong> {user.username}
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">Email:</strong> {user.email}
                </p>
                {user.teamId && (
                    <p className="text-gray-800 dark:text-gray-200">
                        <strong className="text-gray-900 dark:text-gray-100">Team ID:</strong> {user.teamId}
                    </p>
                )}
            </div>
        </div>
    );
};

export default UserCard;
