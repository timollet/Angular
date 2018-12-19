import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatElementComponent } from './chat-element.component';
import {FormsModule} from '@angular/forms';

describe('ChatFormulaireComponent', () => {
  let component: ChatElementComponent;
  let fixture: ComponentFixture<ChatElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatElementComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});