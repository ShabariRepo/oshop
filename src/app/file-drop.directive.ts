import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[fileDrop]'
})
export class FileDropDirective {
    // the file list is just the raw files the user had dropped into the element
    @Output() filesDropped = new EventEmitter<FileList>();
    @Output() filesHovered = new EventEmitter<boolean>();

    constructor () {}

    /* we can use host listener to tie into regular JS events
     - in this case we want to listen to the drop event that occurs each time the user drops a file into the host element
     - preventDefault basically needs to be active or else it will redirect to the local url of that file
     - the $event has a dataTransfer attribute which we can use to obtain the file list
     - once we have the file list in a var then we can just emit it via the Emitter
    */
    @HostListener('drop', ['$event'])
        onDrop($event){
            $event.preventDefault();

            let transfer = $event.dataTransfer;
            this.filesDropped.emit(transfer.files);
            this.filesHovered.emit(false);
        }

    /*
    - we also want to create a separate custom event to prevent redirecting when hovering over an upload zone
    */
    @HostListener('dragover', ['$event'])
        ondragover($event) {
            event.preventDefault();
            this.filesHovered.emit(true);
        }

    /*
    - we also want to create a separate custom event to prevent redirecting when leaving an upload zone
    - basically need this so that we can have a different css when user is over the drop zone
    */
    @HostListener('dragleave', ['$event'])
        ondragleave($event) {
            //event.preventDefault();
            this.filesHovered.emit(false);
        }

    // @HostListener('dragenter', ['$event'])
    //     ondragenter($event) {
    //         event.preventDefault();
    //     }
}