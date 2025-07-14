import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MembersService } from 'src/app/_services/members.service';
import { Member } from 'src/app/types/member'; 

@Component({
  selector: 'app-member-list',
  standalone: true, 
  imports: [AsyncPipe], 
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent {
  private membersService = inject(MembersService);
  protected members$: Observable<Member[]>;

  constructor() {
    this.members$ = this.membersService.getMembers();
    console.log(this.members$);
  }
}
