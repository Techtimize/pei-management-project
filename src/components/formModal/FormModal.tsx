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
import { useEffect, useState } from 'react'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'

interface IModalProps {
  defaultOpen?: boolean
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
  onDraft?: (values: IPeiFields) => void
  onSubmit?: (values: IPeiFields) => void
  onCancel?: () => void
  showRelationship?: boolean
  relationshipText?: string
  onRelationship?: (values: string) => void
  showReset?: boolean
  resetText?: string
  onReset?: () => void
}

export function FormModal({
  defaultOpen = false,
  title,
  description,
  children,
  formik,
  showCancel = true,
  cancelText = 'Cancel',
  onCancel = () => null,
  showSubmit = true,
  submitText = 'Submit',
  onSubmit = () => null,
  showDraft = true,
  draftText = 'Save Draft',
  onDraft = () => null,
  showRelationship = false,
  relationshipText = 'Manage Relationship',
  onRelationship = () => null,
  showReset = true,
  resetText = 'Reset',
  onReset = () => null
}: IModalProps) {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    setOpen(defaultOpen)
  }, [defaultOpen])

  function handleOpenChange(newOpen: boolean) {
    setOpen(newOpen)
    formik.resetForm()
    if (!newOpen) onCancel()
  }

  function resetAndClose() {
    formik.resetForm()
    setOpen(!open)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className='!bg-primary-1'>+ Add</Button>
      </DialogTrigger>
      <DialogContent className='w-[50vw] bg-tertiary-3'>
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
          <div className='flex space-x-4'>
            {!showReset && (
              <Button
                className='rounded !bg-transparent text-secondary-1 text-sm underline'
                onClick={() => {
                  onReset()
                  formik.resetForm()
                }}
              >
                {resetText}
              </Button>
            )}
            {showDraft && (
              <Button
                className='!bg-tertiary-2 text-black text-sm'
                type='submit'
                onClick={() => {
                  onDraft(formik.values)
                  resetAndClose()
                }}
              >
                {draftText}
              </Button>
            )}
            {showRelationship && (
              <Button
                className='!bg-secondary-1 text-black text-sm'
                type='submit'
                onClick={() => {
                  onRelationship(formik.values.pei_pb_id)
                  resetAndClose()
                }}
                disabled
              >
                {relationshipText}
              </Button>
            )}
          </div>

          <div className='space-x-2'>
            {showCancel && (
              <DialogClose asChild>
                <Button
                  className='!bg-danger-1'
                  onClick={() => handleOpenChange(false)}
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
                    onSubmit(formik.values)
                    resetAndClose()
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
