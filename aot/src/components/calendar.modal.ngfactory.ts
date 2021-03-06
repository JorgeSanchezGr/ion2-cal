/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from 'ionic-angular/components/option/option';
import * as i2 from 'ionic-angular/components/icon/icon';
import * as i3 from 'ionic-angular/config/config';
import * as i4 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as i5 from 'ionic-angular/components/button/button';
import * as i6 from '@angular/common';
import * as i7 from './month.component.ngfactory';
import * as i8 from '../../../src/components/month.component';
import * as i9 from '@angular/forms';
import * as i10 from 'ionic-angular/components/toolbar/toolbar-header';
import * as i11 from 'ionic-angular/navigation/view-controller';
import * as i12 from '../../node_modules/ionic-angular/components/toolbar/navbar.ngfactory';
import * as i13 from 'ionic-angular/components/toolbar/navbar';
import * as i14 from 'ionic-angular/components/app/app';
import * as i15 from 'ionic-angular/navigation/nav-controller';
import * as i16 from 'ionic-angular/components/toolbar/toolbar-item';
import * as i17 from 'ionic-angular/components/toolbar/toolbar';
import * as i18 from '../../../src/components/calendar.modal';
import * as i19 from '../../node_modules/ionic-angular/components/select/select.ngfactory';
import * as i20 from 'ionic-angular/components/select/select';
import * as i21 from 'ionic-angular/util/form';
import * as i22 from 'ionic-angular/components/item/item';
import * as i23 from 'ionic-angular/navigation/deep-linker';
import * as i24 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as i25 from 'ionic-angular/components/toolbar/toolbar-title';
import * as i26 from './calendar-week.component.ngfactory';
import * as i27 from '../../../src/components/calendar-week.component';
import * as i28 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as i29 from 'ionic-angular/components/content/content';
import * as i30 from 'ionic-angular/platform/platform';
import * as i31 from 'ionic-angular/platform/dom-controller';
import * as i32 from 'ionic-angular/platform/keyboard';
import * as i33 from 'ionic-angular/components/infinite-scroll/infinite-scroll';
import * as i34 from '../../node_modules/ionic-angular/components/infinite-scroll/infinite-scroll-content.ngfactory';
import * as i35 from 'ionic-angular/components/infinite-scroll/infinite-scroll-content';
import * as i36 from 'ionic-angular/navigation/nav-params';
import * as i37 from '../../../src/services/calendar.service';
const styles_CalendarModal:any[] = ([] as any[]);
export const RenderType_CalendarModal:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_CalendarModal,data:{}});
function View_CalendarModal_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'ion-option',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),i0.ɵdid(16384,
      [[4,4]],0,i1.Option,[i0.ElementRef],{value:[0,'value']},(null as any)),(_l()(),
      i0.ɵted((null as any),['','']))],(_ck,_v) => {
    const currVal_0:any = i0.ɵinlineInterpolate(1,'',_v.context.$implicit,'');
    _ck(_v,1,0,currVal_0);
  },(_ck,_v) => {
    const currVal_1:any = _v.context.$implicit;
    _ck(_v,2,0,currVal_1);
  });
}
function View_CalendarModal_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['','']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.closeLabel;
    _ck(_v,1,0,currVal_0);
  });
}
function View_CalendarModal_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'ion-icon',[['name',
      'close'],['role','img']],[[2,'hide',(null as any)]],(null as any),(null as any),
      (null as any),(null as any))),i0.ɵdid(147456,(null as any),0,i2.Icon,[i3.Config,
      i0.ElementRef,i0.Renderer],{name:[0,'name']},(null as any))],(_ck,_v) => {
    const currVal_1:any = 'close';
    _ck(_v,1,0,currVal_1);
  },(_ck,_v) => {
    const currVal_0:any = i0.ɵnov(_v,1)._hidden;
    _ck(_v,0,0,currVal_0);
  });
}
function View_CalendarModal_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['','']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.doneLabel;
    _ck(_v,1,0,currVal_0);
  });
}
function View_CalendarModal_6(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'ion-icon',[['name',
      'checkmark'],['role','img']],[[2,'hide',(null as any)]],(null as any),(null as any),
      (null as any),(null as any))),i0.ɵdid(147456,(null as any),0,i2.Icon,[i3.Config,
      i0.ElementRef,i0.Renderer],{name:[0,'name']},(null as any))],(_ck,_v) => {
    const currVal_1:any = 'checkmark';
    _ck(_v,1,0,currVal_1);
  },(_ck,_v) => {
    const currVal_0:any = i0.ɵnov(_v,1)._hidden;
    _ck(_v,0,0,currVal_0);
  });
}
function View_CalendarModal_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),8,'button',[['clear',
      ''],['icon-only',''],['ion-button',''],['type','button']],[[8,'disabled',0]],
      [[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.done()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i4.View_Button_0,i4.RenderType_Button)),i0.ɵdid(1097728,[[6,4]],0,i5.Button,
      [[8,''],i3.Config,i0.ElementRef,i0.Renderer],{clear:[0,'clear']},(null as any)),
      (_l()(),i0.ɵted(0,['\n            '])),(_l()(),i0.ɵand(16777216,(null as any),
          0,1,(null as any),View_CalendarModal_5)),i0.ɵdid(16384,(null as any),0,i6.NgIf,
          [i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),
          i0.ɵted(0,['\n            '])),(_l()(),i0.ɵand(16777216,(null as any),0,
          1,(null as any),View_CalendarModal_6)),i0.ɵdid(16384,(null as any),0,i6.NgIf,
          [i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),
          i0.ɵted(0,['\n          ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_1:any = '';
    _ck(_v,1,0,currVal_1);
    const currVal_2:any = ((_co.doneLabel !== '') && !_co.doneIcon);
    _ck(_v,4,0,currVal_2);
    const currVal_3:any = _co.doneIcon;
    _ck(_v,7,0,currVal_3);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:boolean = !_co.canDone();
    _ck(_v,0,0,currVal_0);
  });
}
function View_CalendarModal_7(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n          '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),13,'div',[['class','month-box']],[[1,'id',0]],(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'h4',[['class','text-center month-title']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['',''])),i0.ɵppd(2),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),6,'ion-calendar-month',
          ([] as any[]),[[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],
              [2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
                  (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
          [[(null as any),'onChange'],[(null as any),'ngModelChange']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('onChange' === en)) {
              const pd_0:any = ((<any>_co.onChange($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_1:any = ((<any>(_co.datesTemp = $event)) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },i7.View_MonthComponent_0,i7.RenderType_MonthComponent)),i0.ɵdid(4243456,
          (null as any),0,i8.MonthComponent,[i0.ChangeDetectorRef],{month:[0,'month'],
              pickMode:[1,'pickMode'],isSaveHistory:[2,'isSaveHistory'],id:[3,'id'],
              color:[4,'color']},{onChange:'onChange'}),i0.ɵprd(1024,(null as any),
          i9.NG_VALUE_ACCESSOR,(p0_0:any) => {
            return [p0_0];
          },[i8.MonthComponent]),i0.ɵdid(671744,(null as any),0,i9.NgModel,[[8,(null as any)],
          [8,(null as any)],[8,(null as any)],[2,i9.NG_VALUE_ACCESSOR]],{model:[0,
          'model']},{update:'ngModelChange'}),i0.ɵprd(2048,(null as any),i9.NgControl,
          (null as any),[i9.NgModel]),i0.ɵdid(16384,(null as any),0,i9.NgControlStatus,
          [i9.NgControl],(null as any),(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n\n            '])),(_l()(),i0.ɵted((null as any),['\n          '])),
      (_l()(),i0.ɵted((null as any),['\n        ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_9:any = _v.context.$implicit;
    const currVal_10:any = _co.options.pickMode;
    const currVal_11:any = _co.isSaveHistory;
    const currVal_12:any = _co._id;
    const currVal_13:any = _co._color;
    _ck(_v,8,0,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13);
    const currVal_14:any = _co.datesTemp;
    _ck(_v,10,0,currVal_14);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = ('month-' + _v.context.index);
    _ck(_v,1,0,currVal_0);
    const currVal_1:any = i0.ɵunv(_v,4,0,_ck(_v,5,0,i0.ɵnov((<any>_v.parent),0),_v.context.$implicit.original.date,
        _co.monthFormatFilterStr));
    _ck(_v,4,0,currVal_1);
    const currVal_2:any = i0.ɵnov(_v,12).ngClassUntouched;
    const currVal_3:any = i0.ɵnov(_v,12).ngClassTouched;
    const currVal_4:any = i0.ɵnov(_v,12).ngClassPristine;
    const currVal_5:any = i0.ɵnov(_v,12).ngClassDirty;
    const currVal_6:any = i0.ɵnov(_v,12).ngClassValid;
    const currVal_7:any = i0.ɵnov(_v,12).ngClassInvalid;
    const currVal_8:any = i0.ɵnov(_v,12).ngClassPending;
    _ck(_v,7,0,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7,currVal_8);
  });
}
export function View_CalendarModal_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵpid(0,i6.DatePipe,[i0.LOCALE_ID]),i0.ɵqud(402653184,1,{content:0}),
      i0.ɵqud(402653184,2,{monthsEle:0}),(_l()(),i0.ɵted((null as any),['\n    '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),54,'ion-header',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(16384,(null as any),0,i10.Header,[i3.Config,i0.ElementRef,i0.Renderer,
          [2,i11.ViewController]],(null as any),(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n\n      '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),46,'ion-navbar',
          [['class','toolbar']],[[8,'hidden',0],[2,'statusbar-padding',(null as any)]],
          (null as any),(null as any),i12.View_Navbar_0,i12.RenderType_Navbar)),i0.ɵdid(49152,
          (null as any),0,i13.Navbar,[i14.App,[2,i11.ViewController],[2,i15.NavController],
              i3.Config,i0.ElementRef,i0.Renderer],{color:[0,'color']},(null as any)),
      (_l()(),i0.ɵted(3,['\n\n        '])),(_l()(),i0.ɵeld(0,(null as any),1,15,'ion-buttons',
          [['start','']],[[8,'hidden',0]],(null as any),(null as any),(null as any),
          (null as any))),i0.ɵdid(16384,(null as any),1,i16.ToolbarItem,[i3.Config,
          i0.ElementRef,i0.Renderer,[2,i17.Toolbar],[2,i13.Navbar]],(null as any),
          (null as any)),i0.ɵqud(603979776,3,{_buttons:1}),(_l()(),i0.ɵted((null as any),
          ['\n          '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),10,'ion-select',
          [['interface','popover']],[[2,'select-disabled',(null as any)],[2,'ng-untouched',
              (null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],
              [2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',
                  (null as any)],[2,'ng-pending',(null as any)]],[[(null as any),'ngModelChange'],
              [(null as any),'click'],[(null as any),'keyup.space']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i18.CalendarModal = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,15)._click($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('keyup.space' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,15)._keyup()) !== false);
              ad = (pd_1 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_2:any = ((<any>(_co.year = $event)) !== false);
              ad = (pd_2 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_3:any = ((<any>_co.changedYearSelection()) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },i19.View_Select_0,i19.RenderType_Select)),i0.ɵdid(1228800,(null as any),
          1,i20.Select,[i14.App,i21.Form,i3.Config,i0.ElementRef,i0.Renderer,[2,i22.Item],
              i23.DeepLinker],{interface:[0,'interface']},(null as any)),i0.ɵqud(603979776,
          4,{options:1}),i0.ɵprd(1024,(null as any),i9.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i20.Select]),i0.ɵdid(671744,(null as any),0,i9.NgModel,[[8,(null as any)],
          [8,(null as any)],[8,(null as any)],[2,i9.NG_VALUE_ACCESSOR]],{model:[0,
          'model']},{update:'ngModelChange'}),i0.ɵprd(2048,(null as any),i9.NgControl,
          (null as any),[i9.NgModel]),i0.ɵdid(16384,(null as any),0,i9.NgControlStatus,
          [i9.NgControl],(null as any),(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),
          1,(null as any),View_CalendarModal_1)),i0.ɵdid(802816,(null as any),0,i6.NgForOf,
          [i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],{ngForOf:[0,'ngForOf']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n          '])),(_l()(),
          i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted(3,['\n\n        '])),
      (_l()(),i0.ɵeld(0,(null as any),1,13,'ion-buttons',[['start','']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),i0.ɵdid(16384,
          (null as any),1,i16.ToolbarItem,[i3.Config,i0.ElementRef,i0.Renderer,[2,
              i17.Toolbar],[2,i13.Navbar]],(null as any),(null as any)),i0.ɵqud(603979776,
          5,{_buttons:1}),(_l()(),i0.ɵted((null as any),['\n          '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),8,'button',[['clear',''],['icon-only',
              ''],['ion-button',''],['type','button']],(null as any),[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i18.CalendarModal = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onCancel()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },i4.View_Button_0,i4.RenderType_Button)),i0.ɵdid(1097728,[[5,4]],0,i5.Button,
          [[8,''],i3.Config,i0.ElementRef,i0.Renderer],{clear:[0,'clear']},(null as any)),
      (_l()(),i0.ɵted(0,['\n            '])),(_l()(),i0.ɵand(16777216,(null as any),
          0,1,(null as any),View_CalendarModal_2)),i0.ɵdid(16384,(null as any),0,i6.NgIf,
          [i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),
          i0.ɵted(0,['\n            '])),(_l()(),i0.ɵand(16777216,(null as any),0,
          1,(null as any),View_CalendarModal_3)),i0.ɵdid(16384,(null as any),0,i6.NgIf,
          [i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),
          i0.ɵted(0,['\n          '])),(_l()(),i0.ɵted((null as any),['\n        '])),
      (_l()(),i0.ɵted(3,['\n\n        '])),(_l()(),i0.ɵeld(0,(null as any),3,2,'ion-title',
          ([] as any[]),(null as any),(null as any),(null as any),i24.View_ToolbarTitle_0,
          i24.RenderType_ToolbarTitle)),i0.ɵdid(49152,(null as any),0,i25.ToolbarTitle,
          [i3.Config,i0.ElementRef,i0.Renderer,[2,i17.Toolbar],[2,i13.Navbar]],(null as any),
          (null as any)),(_l()(),i0.ɵted(0,['',''])),(_l()(),i0.ɵted(3,['\n\n        '])),
      (_l()(),i0.ɵeld(0,(null as any),2,6,'ion-buttons',[['end','']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),i0.ɵdid(16384,
          (null as any),1,i16.ToolbarItem,[i3.Config,i0.ElementRef,i0.Renderer,[2,
              i17.Toolbar],[2,i13.Navbar]],(null as any),(null as any)),i0.ɵqud(603979776,
          6,{_buttons:1}),(_l()(),i0.ɵted((null as any),['\n          '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_CalendarModal_4)),
      i0.ɵdid(16384,(null as any),0,i6.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n\n        '])),
      (_l()(),i0.ɵted(3,['\n\n      '])),(_l()(),i0.ɵted((null as any),['\n\n      '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'ion-calendar-week',([] as any[]),
          (null as any),(null as any),(null as any),i26.View_CalendarWeekComponent_0,
          i26.RenderType_CalendarWeekComponent)),i0.ɵdid(49152,(null as any),0,i27.CalendarWeekComponent,
          ([] as any[]),{color:[0,'color'],weekArray:[1,'weekArray'],weekStart:[2,
              'weekStart']},(null as any)),(_l()(),i0.ɵted((null as any),['\n      '])),
      (_l()(),i0.ɵted((null as any),['\n\n    '])),(_l()(),i0.ɵted((null as any),['\n\n    '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),17,'ion-content',[['class','calendar-page']],
          [[2,'statusbar-padding',(null as any)],[2,'has-refresher',(null as any)]],
          [[(null as any),'ionScroll'],['window','resize']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i18.CalendarModal = _v.component;
            if (('window:resize' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,63).resize()) !== false);
              ad = (pd_0 && ad);
            }
            if (('ionScroll' === en)) {
              const pd_1:any = ((<any>_co.onScroll($event)) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },i28.View_Content_0,i28.RenderType_Content)),i0.ɵdid(278528,(null as any),
          0,i6.NgClass,[i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],
          {klass:[0,'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵpod({'multi-selection':0}),
      i0.ɵdid(4374528,[[1,4]],0,i29.Content,[i3.Config,i30.Platform,i31.DomController,
          i0.ElementRef,i0.Renderer,i14.App,i32.Keyboard,i0.NgZone,[2,i11.ViewController],
          [2,i15.NavController]],(null as any),{ionScroll:'ionScroll'}),(_l()(),i0.ɵted(1,
          ['\n\n      '])),(_l()(),i0.ɵeld(0,[[2,0],['months',1]],1,4,'div',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_CalendarModal_7)),i0.ɵdid(802816,(null as any),
          0,i6.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],{ngForOf:[0,
              'ngForOf'],ngForTrackBy:[1,'ngForTrackBy']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n\n      '])),(_l()(),i0.ɵted(1,['\n\n      '])),(_l()(),i0.ɵeld(0,(null as any),
          1,5,'ion-infinite-scroll',([] as any[]),(null as any),[[(null as any),'ionInfinite']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:i18.CalendarModal = _v.component;
            if (('ionInfinite' === en)) {
              const pd_0:any = ((<any>_co.nextMonth($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(1196032,(null as any),0,i33.InfiniteScroll,
          [i29.Content,i0.NgZone,i0.ElementRef,i31.DomController],(null as any),{ionInfinite:'ionInfinite'}),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'ion-infinite-scroll-content',([] as any[]),[[1,'state',
              0]],(null as any),(null as any),i34.View_InfiniteScrollContent_0,i34.RenderType_InfiniteScrollContent)),
      i0.ɵdid(114688,(null as any),0,i35.InfiniteScrollContent,[i33.InfiniteScroll,
          i3.Config],(null as any),(null as any)),(_l()(),i0.ɵted((null as any),['\n      '])),
      (_l()(),i0.ɵted(1,['\n\n    '])),(_l()(),i0.ɵted((null as any),['\n  ']))],(_ck,
      _v) => {
    var _co:i18.CalendarModal = _v.component;
    const currVal_2:any = _co._color;
    _ck(_v,8,0,currVal_2);
    const currVal_12:any = 'popover';
    _ck(_v,15,0,currVal_12);
    const currVal_13:any = _co.year;
    _ck(_v,18,0,currVal_13);
    const currVal_14:any = _co.years;
    _ck(_v,23,0,currVal_14);
    const currVal_15:any = '';
    _ck(_v,32,0,currVal_15);
    const currVal_16:any = ((_co.closeLabel !== '') && !_co.closeIcon);
    _ck(_v,35,0,currVal_16);
    const currVal_17:any = _co.closeIcon;
    _ck(_v,38,0,currVal_17);
    const currVal_19:boolean = !_co._d.autoDone;
    _ck(_v,51,0,currVal_19);
    const currVal_20:any = _co._color;
    const currVal_21:any = _co.weekdays;
    const currVal_22:any = _co.weekStart;
    _ck(_v,56,0,currVal_20,currVal_21,currVal_22);
    const currVal_25:any = 'calendar-page';
    const currVal_26:any = _ck(_v,62,0,(_co.options.pickMode === 'multi'));
    _ck(_v,61,0,currVal_25,currVal_26);
    const currVal_27:any = _co.calendarMonths;
    const currVal_28:any = _co.trackByTime;
    _ck(_v,68,0,currVal_27,currVal_28);
    _ck(_v,75,0);
  },(_ck,_v) => {
    var _co:i18.CalendarModal = _v.component;
    const currVal_0:any = i0.ɵnov(_v,8)._hidden;
    const currVal_1:any = i0.ɵnov(_v,8)._sbPadding;
    _ck(_v,7,0,currVal_0,currVal_1);
    const currVal_3:boolean = !_co.showYearPicker;
    _ck(_v,10,0,currVal_3);
    const currVal_4:any = i0.ɵnov(_v,15)._disabled;
    const currVal_5:any = i0.ɵnov(_v,20).ngClassUntouched;
    const currVal_6:any = i0.ɵnov(_v,20).ngClassTouched;
    const currVal_7:any = i0.ɵnov(_v,20).ngClassPristine;
    const currVal_8:any = i0.ɵnov(_v,20).ngClassDirty;
    const currVal_9:any = i0.ɵnov(_v,20).ngClassValid;
    const currVal_10:any = i0.ɵnov(_v,20).ngClassInvalid;
    const currVal_11:any = i0.ɵnov(_v,20).ngClassPending;
    _ck(_v,14,0,currVal_4,currVal_5,currVal_6,currVal_7,currVal_8,currVal_9,currVal_10,
        currVal_11);
    const currVal_18:any = _co.title;
    _ck(_v,44,0,currVal_18);
    const currVal_23:any = i0.ɵnov(_v,63).statusbarPadding;
    const currVal_24:any = i0.ɵnov(_v,63)._hasRefresher;
    _ck(_v,60,0,currVal_23,currVal_24);
    const currVal_29:any = i0.ɵnov(_v,75).inf.state;
    _ck(_v,74,0,currVal_29);
  });
}
export function View_CalendarModal_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'ion-calendar-modal',
      ([] as any[]),(null as any),(null as any),(null as any),View_CalendarModal_0,
      RenderType_CalendarModal)),i0.ɵdid(49152,(null as any),0,i18.CalendarModal,[i0.Renderer,
      i0.ElementRef,i36.NavParams,i11.ViewController,i0.ChangeDetectorRef,i37.CalendarService],
      (null as any),(null as any))],(null as any),(null as any));
}
export const CalendarModalNgFactory:i0.ComponentFactory<i18.CalendarModal> = i0.ɵccf('ion-calendar-modal',
    i18.CalendarModal,View_CalendarModal_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2pzYW5jaGV6L0NvY2t0YWlMYWJzL2lvbjItY2FsZW5kYXIvc3JjL2NvbXBvbmVudHMvY2FsZW5kYXIubW9kYWwubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvanNhbmNoZXovQ29ja3RhaUxhYnMvaW9uMi1jYWxlbmRhci9zcmMvY29tcG9uZW50cy9jYWxlbmRhci5tb2RhbC50cyIsIm5nOi8vL1VzZXJzL2pzYW5jaGV6L0NvY2t0YWlMYWJzL2lvbjItY2FsZW5kYXIvc3JjL2NvbXBvbmVudHMvY2FsZW5kYXIubW9kYWwudHMuQ2FsZW5kYXJNb2RhbC5odG1sIiwibmc6Ly8vVXNlcnMvanNhbmNoZXovQ29ja3RhaUxhYnMvaW9uMi1jYWxlbmRhci9zcmMvY29tcG9uZW50cy9jYWxlbmRhci5tb2RhbC50cy5DYWxlbmRhck1vZGFsX0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgPGlvbi1oZWFkZXI+XG5cbiAgICAgIDxpb24tbmF2YmFyIFtjb2xvcl09XCJfY29sb3JcIj5cblxuICAgICAgICA8aW9uLWJ1dHRvbnMgc3RhcnQgW2hpZGRlbl09XCIhc2hvd1llYXJQaWNrZXJcIj5cbiAgICAgICAgICA8aW9uLXNlbGVjdCBbKG5nTW9kZWwpXT1cInllYXJcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VkWWVhclNlbGVjdGlvbigpXCIgaW50ZXJmYWNlPVwicG9wb3ZlclwiPlxuICAgICAgICAgICAgPGlvbi1vcHRpb24gKm5nRm9yPVwibGV0IHkgb2YgeWVhcnNcIiB2YWx1ZT1cInt7eX19XCI+e3t5fX08L2lvbi1vcHRpb24+XG4gICAgICAgICAgPC9pb24tc2VsZWN0PlxuICAgICAgICA8L2lvbi1idXR0b25zPlxuXG4gICAgICAgIDxpb24tYnV0dG9ucyBzdGFydD5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgaW9uLWJ1dHRvbiBpY29uLW9ubHkgY2xlYXIgKGNsaWNrKT1cIm9uQ2FuY2VsKClcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY2xvc2VMYWJlbCAhPT0gJycgJiYgIWNsb3NlSWNvblwiPnt7Y2xvc2VMYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgPGlvbi1pY29uICpuZ0lmPVwiY2xvc2VJY29uXCIgbmFtZT1cImNsb3NlXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9pb24tYnV0dG9ucz5cblxuICAgICAgICA8aW9uLXRpdGxlPnt7dGl0bGV9fTwvaW9uLXRpdGxlPlxuXG4gICAgICAgIDxpb24tYnV0dG9ucyBlbmQ+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlvbi1idXR0b24gaWNvbi1vbmx5ICpuZ0lmPVwiIV9kLmF1dG9Eb25lXCIgY2xlYXIgW2Rpc2FibGVkXT1cIiFjYW5Eb25lKClcIiAoY2xpY2spPVwiZG9uZSgpXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImRvbmVMYWJlbCAhPT0gJycgJiYgIWRvbmVJY29uXCI+e3tkb25lTGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxpb24taWNvbiAqbmdJZj1cImRvbmVJY29uXCIgbmFtZT1cImNoZWNrbWFya1wiPjwvaW9uLWljb24+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPC9pb24tYnV0dG9ucz5cblxuICAgICAgPC9pb24tbmF2YmFyPlxuXG4gICAgICA8aW9uLWNhbGVuZGFyLXdlZWtcbiAgICAgICAgW2NvbG9yXT1cIl9jb2xvclwiXG4gICAgICAgIFt3ZWVrQXJyYXldPVwid2Vla2RheXNcIlxuICAgICAgICBbd2Vla1N0YXJ0XT1cIndlZWtTdGFydFwiPlxuICAgICAgPC9pb24tY2FsZW5kYXItd2Vlaz5cblxuICAgIDwvaW9uLWhlYWRlcj5cblxuICAgIDxpb24tY29udGVudCAoaW9uU2Nyb2xsKT1cIm9uU2Nyb2xsKCRldmVudClcIiBjbGFzcz1cImNhbGVuZGFyLXBhZ2VcIlxuICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J211bHRpLXNlbGVjdGlvbic6IG9wdGlvbnMucGlja01vZGUgPT09ICdtdWx0aSd9XCI+XG5cbiAgICAgIDxkaXYgI21vbnRocz5cbiAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1tb250aCBbbmdGb3JPZl09XCJjYWxlbmRhck1vbnRoc1wiIFtuZ0ZvclRyYWNrQnldPVwidHJhY2tCeVRpbWVcIiBsZXQtaT1cImluZGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vbnRoLWJveFwiIFthdHRyLmlkXT1cIidtb250aC0nICsgaVwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwidGV4dC1jZW50ZXIgbW9udGgtdGl0bGVcIj57e21vbnRoLm9yaWdpbmFsLmRhdGUgfCBkYXRlOm1vbnRoRm9ybWF0RmlsdGVyU3RyfX08L2g0PlxuICAgICAgICAgICAgPGlvbi1jYWxlbmRhci1tb250aCBbbW9udGhdPVwibW9udGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGlja01vZGVdPVwib3B0aW9ucy5waWNrTW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpc1NhdmVIaXN0b3J5XT1cImlzU2F2ZUhpc3RvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbG9yXT1cIl9jb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJkYXRlc1RlbXBcIj5cblxuICAgICAgICAgICAgPC9pb24tY2FsZW5kYXItbW9udGg+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aW9uLWluZmluaXRlLXNjcm9sbCAoaW9uSW5maW5pdGUpPVwibmV4dE1vbnRoKCRldmVudClcIj5cbiAgICAgICAgPGlvbi1pbmZpbml0ZS1zY3JvbGwtY29udGVudD48L2lvbi1pbmZpbml0ZS1zY3JvbGwtY29udGVudD5cbiAgICAgIDwvaW9uLWluZmluaXRlLXNjcm9sbD5cblxuICAgIDwvaW9uLWNvbnRlbnQ+XG4gICIsIjxpb24tY2FsZW5kYXItbW9kYWw+PC9pb24tY2FsZW5kYXItbW9kYWw+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDT1k7TUFBQSwrRUFBQTtNQUFBLHVFQUFrRDthQUFBO0lBQWQ7SUFBcEMsV0FBb0MsU0FBcEM7O0lBQWtEO0lBQUE7Ozs7b0JBTWxEO01BQUEsd0VBQThDO2FBQUE7O0lBQUE7SUFBQTs7OztvQkFDOUM7TUFBQTtNQUFBLHFDQUFBOytCQUFBO0lBQTRCO0lBQTVCLFdBQTRCLFNBQTVCOztJQUFBO0lBQUEsV0FBQSxTQUFBOzs7O29CQVFBO01BQUEsd0VBQTRDO2FBQUE7O0lBQUE7SUFBQTs7OztvQkFDNUM7TUFBQTtNQUFBLHFDQUFBOytCQUFBO0lBQTJCO0lBQTNCLFdBQTJCLFNBQTNCOztJQUFBO0lBQUEsV0FBQSxTQUFBOzs7O29CQUZGO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBOEY7VUFBQTtVQUFBO1FBQUE7UUFBOUY7TUFBQSxpREFBQTtNQUFBO01BQStHLHVDQUM3RztVQUFBLGdEQUFBO1VBQUEsc0VBQWdFO2lCQUFBLHdCQUNoRTtVQUFBLDhDQUFBO1VBQUEsc0VBQXVEO2lCQUFBOztJQUZPO0lBQWhFLFdBQWdFLFNBQWhFO0lBQ1E7SUFBTixXQUFNLFNBQU47SUFDVTtJQUFWLFdBQVUsU0FBVjs7O0lBRm9FO0lBQXRFLFdBQXNFLFNBQXRFOzs7O29CQXFCaUcsaURBQ2pHO01BQUE7TUFBQSw0Q0FBZ0Q7TUFDOUM7VUFBQTtNQUFvQyxtREFBd0Q7VUFB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
