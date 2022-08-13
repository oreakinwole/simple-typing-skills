import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogOverlay
  } from "@chakra-ui/react";
  
  const BaseDialog = ({
    title,
    children,
    openModal,
    size = "md",
    handleClose,
    ...props
  }) => {
    return (
      <>
        <AlertDialog
          motionPreset="scale"
          onClose={handleClose}
          isOpen={openModal}
          isCentered
          size={size}
          {...props}
        >
          <AlertDialogOverlay />
  
          <div className="pb-6">
            <AlertDialogContent>
              <AlertDialogHeader>{title}</AlertDialogHeader>
              <AlertDialogCloseButton />
              <AlertDialogBody>{children}</AlertDialogBody>
            </AlertDialogContent>
          </div>
        </AlertDialog>
      </>
    );
  };
  
  export default BaseDialog;
  