import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expert-create',
  templateUrl: './expert-create.component.html',
  styleUrls: ['./expert-create.component.css']
})
export class ExpertCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      bio: ['', Validators.required],
      social_media: this.formBuilder.group({
        twitter: ['', Validators.pattern(/@\w+/)],
        facebook: '',
        linkedin: '',
      }),
      email: ['', [
          Validators.required,
          Validators.email,
        ]
      ],
      password: ['', [
          Validators.required,
          Validators.minLength,
        ]
      ],
    });
  }

  onSubmit() {
    console.log('executed');
  }

  /* TODO: implement upload photo profile component */
}

