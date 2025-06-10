import useMediaQuery from '@/components/hooks/useMediaQuery';
import {
  ConversationFilters,
  type ConversationFilterType,
} from '@/types/messagingTypes';

type ConversationFilterProps = {
  selectedFilter: ConversationFilterType;
  setSelectedFilter: React.Dispatch<
    React.SetStateAction<ConversationFilterType>
  >;
};

const ConversationFilter: React.FC<ConversationFilterProps> = ({
  selectedFilter,
  setSelectedFilter,
}) => {
  const isBreakPoint = useMediaQuery(1024);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setSelectedFilter(target.value as ConversationFilterType);
  };

  return (
    <div
      className={`mx-auto flex min-w-[358px] items-center rounded-full bg-base-80 p-1 text-sm font-bold ${isBreakPoint ? 'my-4' : 'mb-8'}`}
    >
      <button
        className={`h-full min-h-[30px] w-1/2 rounded-full ${selectedFilter === 'GIVER' ? 'bg-monoY' : ''}`}
        onClick={clickHandler}
        value={ConversationFilters.GIVER}
      >
        Giver
      </button>
      <button
        className={`h-full min-h-[30px] w-1/2 rounded-full ${selectedFilter === 'RECEIVER' ? 'bg-monoY' : ''}`}
        onClick={clickHandler}
        value={ConversationFilters.RECEIVER}
      >
        Receiver
      </button>
    </div>
  );
};

export default ConversationFilter;
