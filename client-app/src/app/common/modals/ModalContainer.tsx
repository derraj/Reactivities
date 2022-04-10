import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { useStore } from '../../stores/store';

export default observer(function ModalContainer() {
    const {modalStore} = useStore();

    return (
        <Modal open={modalStore.modal.open} onClose={modalStore.closeModal} size='mini' closeIcon>
            <Modal.Content >
                {modalStore.modal.body}
            </Modal.Content>
        </Modal>
    )
})