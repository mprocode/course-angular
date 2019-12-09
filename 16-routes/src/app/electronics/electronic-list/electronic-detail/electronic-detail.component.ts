import { Component, OnInit } from '@angular/core';
import { Electronic } from '../../../models/electronic.model';
import { Observable } from 'rxjs';
import { ElectronicService } from '../../../services/electronic.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-electronic-detail',
  templateUrl: './electronic-detail.component.html',
  styleUrls: ['./electronic-detail.component.css']
})
export class ElectronicDetailComponent implements OnInit {

  electronic$: Observable<Electronic>;

  constructor(
    private electronicService: ElectronicService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.electronic$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.electronicService.get( +params.get("index") ) ) );
  }

  back() {
    this.router.navigate([".."], {relativeTo: this.route });
  }

}
