import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contact: Contact[];
  dataService: ContactService;

  constructor(private ContactService: ContactService) {
    this.dataService = ContactService;
  }

  ngOnInit(): void {
    this.contact = this.dataService.contact;
  }
}
