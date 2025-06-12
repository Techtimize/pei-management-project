import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  // DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
// import { Button } from '@/components/ui/button'
import { useAppSelector } from '@/hooks/storeHooks'
import { IDraftSlice } from '@/store/reducers/draftSlice'
import { useNavigate } from 'react-router'

type keyType = keyof IDraftSlice
type fieldType = keyof IDraftSlice[keyof IDraftSlice]

function BottomSheet() {
  const drafts = useAppSelector((state) => state.draft)
  const navigate = useNavigate()

  function handleDraftClick(key: 'pei' | 'portfolio' | 'local' | 'subsidiary') {
    navigate(`/${key}-companies`, { state: { draft: true } })
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className='w-full flex justify-center items-center px-2'>
          <div className='flex align-center'>
            <span>Open Drafts</span>
          </div>
          <div className='flex align-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='m18 15-6-6-6 6' />
            </svg>
          </div>
        </div>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className='text-white'>Drafts</DrawerTitle>
          <DrawerDescription className='text-white'>
            Resume working on a company saved as draft
          </DrawerDescription>
        </DrawerHeader>
        <div className='p-4'>
          {Object.keys(drafts).length > 0 ? (
            <ul className='space-y-2'>
              {Object.keys(drafts).map((key: string) => (
                <DrawerClose asChild key={key}>
                  <li
                    className='p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700'
                    onClick={() => handleDraftClick(key as keyType)}
                  >
                    <div className='text-white'>{key.toUpperCase()}</div>
                    <div className='text-sm text-gray-400'>
                      {Object.keys(drafts[key as keyType] as object)
                        .filter(
                          (field) =>
                            drafts[key as keyType]?.[field as fieldType] !== ''
                        )
                        .map(
                          (field) => (
                            <>
                              {/* <span className='font-bold'>{field}: </span> */}
                              <span>
                                {drafts[key as keyType]?.[field as fieldType]},{' '}
                              </span>
                            </>
                          )
                          // ': ' +
                        )}
                    </div>
                  </li>
                </DrawerClose>
              ))}
              {/* <li className='p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700'>
              <div className='text-white'>PEI</div>
            </li>
            <li className='p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700'>
              <div className='text-white'>Draft Company 2</div>
            </li>
            <li className='p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700'>
              <div className='text-white'>Draft Company 2</div>
            </li>
            <li className='p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700'>
              <div className='text-white'>Draft Company 2</div>
            </li> */}
              {/* <li className='p-3 bg-gray-800 rounded-md cursor-pointer hover:bg-gray-700'>
              <div className='text-white'>Draft Company 3</div>
              <div className='text-sm text-gray-400'>
                Last edited: 1 week ago
              </div>
            </li> */}
            </ul>
          ) : (
            <div className='flex items-center justify-center text-white font-semibold text-3xl'>
              No drafts available .
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default BottomSheet
