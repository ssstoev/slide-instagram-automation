'use client'
import React from 'react'
import Link from 'next/link'
import { cn, getMonth } from '@/lib/utils'
import GradientButton from '../gradient-button'
import { Button } from '@/components/ui/button'
import { TrashBinIcon } from '@/icons/trash-bin'
import { useDeleteAutomation } from "@/hooks/use-automations";
import { useState } from "react";
import { useQueryClient } from '@tanstack/react-query'

type Keyword = {
  automationId: string
  id: string;
  word: string
};

type Listener = {
  automationId: string;
  commentCount: number;
  commentReply: string;
  dmCount: number;
  id: string;
  listener: "MESSAGE" | 'SMARTAI';
  prompt: string;
};

type Props = {
  automation: {
    id: string,
    createdAt: Date,	
    name: string,
    keywords: Keyword[],
    listener: Listener
  },
  pathname: string
}

const AutomationCard = ( { automation, pathname }: Props) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useDeleteAutomation(automation.id)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleDelete = () => {
    console.log('delete button clicked')
    // Trigger the delete mutation
    mutate(automation.id, {
      onSuccess: () => {
        console.log(`Automation with ID ${automation.id} deleted successfully.`);
        queryClient.invalidateQueries({ queryKey: ['user-automations'] });
        setShowConfirm(false);
      },
      onError: (error) => {
        setShowConfirm(false)
        console.error(`Failed to delete automation with ID ${automation.id}:`, error);
      },
    });
    setShowConfirm(false);
  };

  return (
    <>
    <Link
        href={`${pathname}/${automation.id}`}
        key={automation.id}
        className="bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] radial--gradient--automations flex border-[#545454]"
      >
        <div className="flex flex-col flex-1 items-start">
          <h2 className="text-xl font-semibold">{automation.name}</h2>
          {/* WIP: Fetch the description of the automation */}
          <p className="text-[#9B9CA0] text-sm font-light mb-2">
            This is from the comment
          </p>

          {automation.keywords.length > 0 ? (
            <div className="flex gap-x-2 flex-wrap mt-3">
              {
                //@ts-ignore
                automation.keywords.map((keyword, key) => (
                  <div
                    key={keyword.id}
                    className={cn(
                      'rounded-full px-4 py-1 capitalize mb-2',
                      (key + 1) % 1 == 0 &&
                        'bg-keyword-green/15 border-2 border-keyword-green',
                      (key + 1) % 2 == 0 &&
                        'bg-keyword-purple/15 border-2 border-keyword-purple',
                      (key + 1) % 3 == 0 &&
                        'bg-keyword-yellow/15 border-2 border-keyword-yellow',
                      (key + 1) % 4 == 0 &&
                        'bg-keyword-red/15 border-2 border-keyword-red'
                    )}
                  >
                    {keyword.word}
                  </div>
                ))
              }
            </div>
          ) : (
            <div className="rounded-full border-2 mt-3 border-dashed border-white/60 px-3 py-1">
              <p className="text-sm text-[#bfc0c3]">No Keywords</p>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex items-center justify-between w-full">
            <span className="capitalize text-sm font-light text-[#9B9CA0] mr-3">
              {getMonth(automation.createdAt.getUTCMonth() + 1)}{' '}
              {automation.createdAt.getUTCDate() === 1
                ? `${automation.createdAt.getUTCDate()}st`
                : `${automation.createdAt.getUTCDate()}th`}{' '}
              {automation.createdAt.getUTCFullYear()}
            </span>
            <span
              className="hover:text-red-500 transition-colors"
              onClick={e => {
                e.preventDefault(); //stops the link from opening the automation page
                e.stopPropagation(); // prevents the link from being clicked
                // handleClick();
                setShowConfirm(true)
              }}>
              <TrashBinIcon/>
            </span>
        </div>

          {automation.listener?.listener === 'SMARTAI' ? (
            <GradientButton
              type="BUTTON"
              className="w-full bg-background-80 text-white hover:bg-background-80"
            >
              Smart AI
            </GradientButton>
          ) : (
            <Button className="bg-background-80 hover:bg-background-80 text-white">
              Standard
            </Button>
          )}
        </div>
      </Link>

      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-[#1D1D1D] rounded-lg p-6 shadow-lg flex flex-col items-center">
            <p className="mb-4 text-lg font-semibold text-white">Are you sure you want to delete the automation?</p>
            <div className="flex gap-4">
              <Button
                className="w-32 lg:px-10 py-3 bg-gradient-to-br hover:opacity-80 text-white
                          rounded-full from-[#3352CC] font-medium to-[#1C2D70]"
                onClick={handleDelete}
              >
                Yes, delete
              </Button>
              <Button
                className="w-32 lg:px-10 py-3 bg-gradient-to-br hover:opacity-80 text-white
                          rounded-full from-[#818283] font-medium to-[#737478]"
                onClick={() => setShowConfirm(false)}
              >
                No, keep
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AutomationCard