import { Button, ButtonGroup } from "@chakra-ui/react";

import BaseDialog from "./base/BaseDialog";

export default function TimeUpModal({
  isModalOpen,
  setIsModalOpen,
  points,
  totalAvailablePoints,
}) {
  return (
    <BaseDialog
      openModal={isModalOpen}
      handleClose={() => {
        setIsModalOpen(false);
      }}
      title="Time up"
    >
      <div className="">
        <p>
          Congratulations, you are done with this assessment, you scored
          <b className=""> {points} points</b> out of{" "}
          <b>{totalAvailablePoints}</b>
        </p>
      </div>
      <br />
      <div className="">
        <ButtonGroup justifyContent="center" className="">
          <Button
            variant="outline"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Close
          </Button>
        </ButtonGroup>
      </div>
    </BaseDialog>
  );
}
