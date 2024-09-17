'use client';

import { getProfile } from '@/supabase/models/getProfile';
import upsertRow from '@/supabase/models/upsertRow';
import { profile } from '@/types/supabaseTypes';
import { useState, useEffect } from 'react';

interface ModalProps {
  name: string;
  itemId: number;
  onReserveStatusChange: (itemId: number, reservedBy: string | null) => void;
  requestedToReserveUserIds?: string[];
}

type ReserveUserData = Pick<profile, 'username' | 'id'>;

const ReserveForUserModal = ({
  name,
  itemId,
  onReserveStatusChange,
  requestedToReserveUserIds,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [requestedToReserveUsers, setRequestedToReserveUsers] = useState<
    ReserveUserData[]
  >([]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      if (requestedToReserveUserIds) {
        const promises = requestedToReserveUserIds.map(async (userId) => {
          const usersData = await getProfile(userId);
          return { username: usersData.data.username, id: userId };
        });
        const users = await Promise.all(promises);
        setRequestedToReserveUsers(users);
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
      onReserveStatusChange(itemId, userId);
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
              {requestedToReserveUsers.length > 0
                ? 'Who are you reserving this for?'
                : 'Nobody has asked about this item yet.'}
            </p>
            {requestedToReserveUsers.map((user) => (
              <div
                className='flex w-full items-center justify-between gap-2'
                key={user.id as string}
              >
                <p className='font-light'>{user.username}</p>
                <button
                  className='button button-rounded'
                  onClick={() => handleConfirmReserve(user.id)}
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
