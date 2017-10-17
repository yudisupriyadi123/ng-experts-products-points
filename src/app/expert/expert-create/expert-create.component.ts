import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ExpertService } from '../../core/expert.service';

@Component({
  selector: 'app-expert-create',
  templateUrl: './expert-create.component.html',
  styleUrls: ['./expert-create.component.css']
})
export class ExpertCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private expertService: ExpertService,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    /* TODO: add validation to existing email */
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      bio: ['', Validators.required],
      social_media: this.formBuilder.group({
        twitter_username: ['', Validators.pattern(/@\w+/)],
        facebook_url: '',
        linkedin_username: '',
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
    let expertId = this.expertService.addExpert(this.form.value);
    // this.router.navigateByUrl('/product/list');
    // TODO: remove below, uncomment above after Product component created
    this.router.navigateByUrl(`/expert/profile/${expertId}`);
  }

  /* TODO: implement upload photo profile component */
}

