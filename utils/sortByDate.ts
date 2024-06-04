import { AllConversationsType } from '@/types/messagingTypes';

const sortByDate = (arr: AllConversationsType): AllConversationsType => {
  return arr.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);

    return dateB.getTime() - dateA.getTime();
  });
};

export default sortByDate;
