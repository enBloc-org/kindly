'use client';

import { getProfile } from '@/supabase/models/getProfile';
import selectConversationPartner from '@/supabase/models/messaging/selectConversationPartner';
import selectConversationsByItemId from '@/supabase/models/messaging/selectConversationsByItemId';
import upsertRow from '@/supabase/models/upsertRow';
import { profile } from '@/types/supabaseTypes';
import { useEffect, useState } from 'react';

interface ModalProps {
  name: string;
  itemId: number | undefined;
  currentUserId: string;
  onReserveStatusChange: () => void;
}

type ReserveUserData = Pick<profile, 'username' | 'id'>;

const ReserveForUserModal = ({
  name,
  itemId,
  currentUserId,
  onReserveStatusChange,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [usersThatCanReserve, setUsersThatCanReserve] = useState<
    ReserveUserData[]
  >([]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const users: ReserveUserData[] = [];
      const userConversationIds = await selectConversationsByItemId(itemId!);
      if (userConversationIds.size > 0) {
        const promises = Array.from(userConversationIds).map(
          async (id: number) => {
            try {
              const profileId = await selectConversationPartner(
                id,
                currentUserId
              );
              if (profileId !== undefined) {
                const partnerProfile = await getProfile(profileId);
                users.push({
                  username: partnerProfile.data.username,
                  id: profileId,
                });
              } else {
                console.warn(`No profileId found for conversationId: ${id}`);
              }
            } catch (error) {
              console.error(error);
            }
          }
        );
        await Promise.all(promises);

        setUsersThatCanReserve(users);
      }
    };
    fetchUsers();
  }, []);

  const handleConfirmReserve = async (userId: string) => {
    try {
      await upsertRow('items', {
        id: itemId,
        is_reserved: true,
        reserved_by: userId,
      });
      toggleModal();
      onReserveStatusChange();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button className='button button-rounded my-2' onClick={toggleModal}>
        {name}
      </button>
      {isOpen && (
        <div className='overlay'>
          <div className='flex flex-col items-center justify-center gap-3 rounded-lg bg-backgroundHighlight p-6 shadow-md'>
            <p className='font-light'>
              {usersThatCanReserve.length > 0
                ? 'Who are you reserving this for?'
                : 'Nobody has asked about this item yet.'}
            </p>
            {usersThatCanReserve.map((user, index) => (
              <div
                className='flex w-full items-center justify-between gap-2'
                key={index}
              >
                <p className='font-light'>{user.username}</p>
                <button
                  className='button button-rounded'
                  onClick={() => handleConfirmReserve(user.id as string)}
                >
                  Confirm
                </button>
              </div>
            ))}
            <div className='mt-2 flex gap-6'>
              <button className='button button-rounded' onClick={toggleModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReserveForUserModal;
