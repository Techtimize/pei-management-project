import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { IPeiFields } from '@/pages/main/PEIListing/types'
import { FormikProps } from 'formik'
import { useState } from 'react'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'

interface IModalProps {
  title: string
  description: string
  children: React.ReactNode
  formik: FormikProps<IPeiFields>
  showCancel?: boolean
  cancelText?: string
  showSubmit?: boolean
  submitText?: string
  showDraft?: boolean
  draftText?: string
}

export function FormModal({
  title,
  description,
  children,
  formik,
  showCancel = true,
  cancelText = 'Cancel',
  showSubmit = true,
  submitText = 'Submit',
  showDraft = true,
  draftText = 'Save Draft'
}: IModalProps) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='!bg-primary-1'>+ Add</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='text-white'>{title}</DialogTitle>
          <DialogDescription className='text-white'>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className='flex items-center gap-2'>
          <div className='grid flex-1 gap-2'>
            {/* <Label htmlFor='link' className='sr-only'>
              Link
            </Label>
            <Input
              id='link'
              defaultValue='https://ui.shadcn.com/docs/installation'
              readOnly
            /> */}
            {children}
          </div>
        </div>
        <DialogFooter className='sm:justify-start md:justify-between'>
          <div>
            {showDraft && (
              <Button
                className='!bg-tertiary-1 text-black text-sm'
                type='submit'
                onClick={() => {
                  // formik.handleSubmit()
                  // if (!Object.keys(formik.errors).length) {
                  //   formik.resetForm()
                  //   setOpen(!open)
                  // }
                  console.log('saving draft...')
                }}
              >
                {draftText}
              </Button>
            )}
          </div>

          <div className='space-x-2'>
            {showCancel && (
              <DialogClose asChild>
                <Button
                  className='!bg-danger-1'
                  onClick={() => {
                    formik.resetForm()
                    setOpen(!open)
                  }}
                >
                  {cancelText}
                </Button>
              </DialogClose>
            )}
            {showSubmit && (
              // <DialogClose asChild>
              <Button
                className='!bg-primary-1'
                type='submit'
                onClick={() => {
                  formik.handleSubmit()
                  if (!Object.keys(formik.errors).length) {
                    formik.resetForm()
                    setOpen(!open)
                  }
                }}
              >
                {submitText}
              </Button>
              // </DialogClose>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
