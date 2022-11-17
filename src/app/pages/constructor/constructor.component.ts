import { Component, OnInit } from '@angular/core';
import { StoreItem } from 'src/app/models/StoreItem.model';
import { StoreService } from 'src/app/services/store.service';
import { MatDrawerMode } from '@angular/material/sidenav';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css']
})


export class ConstructorComponent implements OnInit {
 
  flowerSubPage = false;
  wrapperSubPage = false;
  ropeSubPage = false;
  currentSubPageIndex = 0;
  flowerNavButtonStyle: string ='';
  wraperNavButtonStyle: string ='';
  ropeNavButtonStyle: string ='';

  constructor(private mediaObserver: MediaObserver, private storeServise: StoreService) 
  { 
    this.resetSubPages();
    this.openSubPage(0);
  }

  ngOnInit(): void {


  }
  nextStepButton():void {
    this.stepButton(true); 
  }

  previousStepButton():void {
    this.stepButton(false);
  }

  toCartButton(){
    this.openSubPage(0);
  }

  openSubPage(index:number)
  {
    this.resetSubPages();

    this.currentSubPageIndex = index;

    if(index==0)
    {
      this.flowerNavButtonStyle = 'constructor-navigation-button-selected';
      this.flowerSubPage = true;
    }
      else if(index==1){
        this.wraperNavButtonStyle = 'constructor-navigation-button-selected';
        this.wrapperSubPage = true;
      }
        else if(index==2){
          this.ropeNavButtonStyle = 'constructor-navigation-button-selected';
          this.ropeSubPage = true;
        }
          else throw new Error('incorect index! must be in range 0-2');

  }

  private stepButton(isNextButton: boolean)
  {
    isNextButton ? this.currentSubPageIndex++ : this.currentSubPageIndex--;
    if(this.currentSubPageIndex < 0)
        this.currentSubPageIndex = 0;
    if(this.currentSubPageIndex > 2)
        this.currentSubPageIndex = 2;  

    this.openSubPage(this.currentSubPageIndex);
  }

  private resetSubPages():void
  {
    this.flowerSubPage = false;
    this.ropeSubPage = false;
    this.wrapperSubPage = false;
    this.flowerNavButtonStyle = 'constructor-navigation-button';
    this.wraperNavButtonStyle = 'constructor-navigation-button';
    this.ropeNavButtonStyle =  'constructor-navigation-button';

  }

}
