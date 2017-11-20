/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from 'ionic-angular/components/icon/icon';
import * as i2 from 'ionic-angular/config/config';
import * as i3 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as i4 from 'ionic-angular/components/button/button';
import * as i5 from '@angular/common';
import * as i6 from './calendar-week.component.ngfactory';
import * as i7 from '../../../src/components/calendar-week.component';
import * as i8 from './month.component.ngfactory';
import * as i9 from '../../../src/components/month.component';
import * as i10 from '@angular/forms';
import * as i11 from './month-picker.component.ngfactory';
import * as i12 from '../../../src/components/month-picker.component';
import * as i13 from '../../../src/components/calendar.component';
import * as i14 from '../../../src/services/calendar.service';
const styles_CalendarComponent:any[] = ([] as any[]);
export const RenderType_CalendarComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_CalendarComponent,data:{}});
function View_CalendarComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'ion-icon',[['class',
      'arrow-dropdown'],['role','img']],[[2,'hide',(null as any)]],(null as any),(null as any),
      (null as any),(null as any))),i0.ɵdid(147456,(null as any),0,i1.Icon,[i2.Config,
      i0.ElementRef,i0.Renderer],{name:[0,'name']},(null as any))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_1:any = ((_co._view === 'days')? 'md-arrow-dropdown': 'md-arrow-dropup');
    _ck(_v,1,0,currVal_1);
  },(_ck,_v) => {
    const currVal_0:any = i0.ɵnov(_v,1)._hidden;
    _ck(_v,0,0,currVal_0);
  });
}
function View_CalendarComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),6,'button',[['class','switch-btn'],['clear',''],
          ['ion-button',''],['type','button']],[[8,'disabled',0]],[[(null as any),
          'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.switchView()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i3.View_Button_0,i3.RenderType_Button)),i0.ɵdid(1097728,(null as any),0,i4.Button,
      [[8,''],i2.Config,i0.ElementRef,i0.Renderer],{clear:[0,'clear']},(null as any)),
      (_l()(),i0.ɵted(0,['\n          ','\n          '])),i0.ɵppd(2),(_l()(),i0.ɵand(16777216,
          (null as any),0,1,(null as any),View_CalendarComponent_2)),i0.ɵdid(16384,
          (null as any),0,i5.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i0.ɵted(0,['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n      ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_1:any = '';
    _ck(_v,2,0,currVal_1);
    const currVal_3:boolean = !_co.readonly;
    _ck(_v,6,0,currVal_3);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.readonly;
    _ck(_v,1,0,currVal_0);
    const currVal_2:any = i0.ɵunv(_v,3,0,_ck(_v,4,0,i0.ɵnov((<any>_v.parent),0),_co.monthOpt.original.time,
        _co._d.monthFormat));
    _ck(_v,3,0,currVal_2);
  });
}
function View_CalendarComponent_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),2,'div',[['class','switch-btn']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n          ',
      '\n        '])),i0.ɵppd(2),(_l()(),i0.ɵted((null as any),['\n      ']))],(null as any),
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = i0.ɵunv(_v,2,0,_ck(_v,3,0,i0.ɵnov((<any>_v.parent),0),
            _co.monthOpt.original.time,_co._d.monthFormat));
        _ck(_v,2,0,currVal_0);
      });
}
function View_CalendarComponent_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),5,'button',[['class','back'],['clear',''],['ion-button',
          ''],['type','button']],[[8,'disabled',0]],[[(null as any),'click']],(_v,
          en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.prev()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i3.View_Button_0,i3.RenderType_Button)),i0.ɵdid(1097728,(null as any),0,i4.Button,
      [[8,''],i2.Config,i0.ElementRef,i0.Renderer],{clear:[0,'clear']},(null as any)),
      (_l()(),i0.ɵted(0,['\n          '])),(_l()(),i0.ɵeld(0,(null as any),0,1,'ion-icon',
          [['name','ios-arrow-back'],['role','img']],[[2,'hide',(null as any)]],(null as any),
          (null as any),(null as any),(null as any))),i0.ɵdid(147456,(null as any),
          0,i1.Icon,[i2.Config,i0.ElementRef,i0.Renderer],{name:[0,'name']},(null as any)),
      (_l()(),i0.ɵted(0,['\n        '])),(_l()(),i0.ɵted((null as any),['\n        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),5,'button',[['class','forward'],
          ['clear',''],['ion-button',''],['type','button']],[[8,'disabled',0]],[[(null as any),
          'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.next()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i3.View_Button_0,i3.RenderType_Button)),i0.ɵdid(1097728,(null as any),0,i4.Button,
          [[8,''],i2.Config,i0.ElementRef,i0.Renderer],{clear:[0,'clear']},(null as any)),
      (_l()(),i0.ɵted(0,['\n          '])),(_l()(),i0.ɵeld(0,(null as any),0,1,'ion-icon',
          [['name','ios-arrow-forward'],['role','img']],[[2,'hide',(null as any)]],
          (null as any),(null as any),(null as any),(null as any))),i0.ɵdid(147456,
          (null as any),0,i1.Icon,[i2.Config,i0.ElementRef,i0.Renderer],{name:[0,'name']},
          (null as any)),(_l()(),i0.ɵted(0,['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n      ']))],(_ck,_v) => {
    const currVal_1:any = '';
    _ck(_v,2,0,currVal_1);
    const currVal_3:any = 'ios-arrow-back';
    _ck(_v,5,0,currVal_3);
    const currVal_5:any = '';
    _ck(_v,9,0,currVal_5);
    const currVal_7:any = 'ios-arrow-forward';
    _ck(_v,12,0,currVal_7);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:boolean = (!_co.canBack() || _co.readonly);
    _ck(_v,1,0,currVal_0);
    const currVal_2:any = i0.ɵnov(_v,5)._hidden;
    _ck(_v,4,0,currVal_2);
    const currVal_4:boolean = (!_co.canNext() || _co.readonly);
    _ck(_v,8,0,currVal_4);
    const currVal_6:any = i0.ɵnov(_v,12)._hidden;
    _ck(_v,11,0,currVal_6);
  });
}
function View_CalendarComponent_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),2,'ion-calendar-week',[['color','transparent']],
      (null as any),(null as any),(null as any),i6.View_CalendarWeekComponent_0,i6.RenderType_CalendarWeekComponent)),
      i0.ɵdid(49152,(null as any),0,i7.CalendarWeekComponent,([] as any[]),{color:[0,
          'color'],weekArray:[1,'weekArray'],weekStart:[2,'weekStart']},(null as any)),
      (_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵted((null as any),['\n\n      '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),6,'ion-calendar-month',([] as any[]),
          [[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',
              (null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],
              [2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],[[(null as any),
              'ngModelChange'],[(null as any),'onChange']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('ngModelChange' === en)) {
              const pd_0:any = ((<any>(_co._calendarMonthValue = $event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('onChange' === en)) {
              const pd_1:any = ((<any>_co.onChanged($event)) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },i8.View_MonthComponent_0,i8.RenderType_MonthComponent)),i0.ɵdid(4243456,
          (null as any),0,i9.MonthComponent,[i0.ChangeDetectorRef],{month:[0,'month'],
              pickMode:[1,'pickMode'],readonly:[2,'readonly'],color:[3,'color']},{onChange:'onChange'}),
      i0.ɵprd(1024,(null as any),i10.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i9.MonthComponent]),i0.ɵdid(671744,(null as any),0,i10.NgModel,[[8,(null as any)],
          [8,(null as any)],[8,(null as any)],[2,i10.NG_VALUE_ACCESSOR]],{model:[0,
          'model']},{update:'ngModelChange'}),i0.ɵprd(2048,(null as any),i10.NgControl,
          (null as any),[i10.NgModel]),i0.ɵdid(16384,(null as any),0,i10.NgControlStatus,
          [i10.NgControl],(null as any),(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n      '])),(_l()(),i0.ɵted((null as any),['\n    ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = 'transparent';
    const currVal_1:any = _co._d.weekdays;
    const currVal_2:any = _co._d.weekStart;
    _ck(_v,2,0,currVal_0,currVal_1,currVal_2);
    const currVal_10:any = _co.monthOpt;
    const currVal_11:any = _co._d.pickMode;
    const currVal_12:any = _co.readonly;
    const currVal_13:any = _co._d.color;
    _ck(_v,6,0,currVal_10,currVal_11,currVal_12,currVal_13);
    const currVal_14:any = _co._calendarMonthValue;
    _ck(_v,8,0,currVal_14);
  },(_ck,_v) => {
    const currVal_3:any = i0.ɵnov(_v,10).ngClassUntouched;
    const currVal_4:any = i0.ɵnov(_v,10).ngClassTouched;
    const currVal_5:any = i0.ɵnov(_v,10).ngClassPristine;
    const currVal_6:any = i0.ɵnov(_v,10).ngClassDirty;
    const currVal_7:any = i0.ɵnov(_v,10).ngClassValid;
    const currVal_8:any = i0.ɵnov(_v,10).ngClassInvalid;
    const currVal_9:any = i0.ɵnov(_v,10).ngClassPending;
    _ck(_v,5,0,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7,currVal_8,currVal_9);
  });
}
function View_CalendarComponent_6(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),2,'ion-calendar-month-picker',([] as any[]),(null as any),
      [[(null as any),'onSelect']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('onSelect' === en)) {
          const pd_0:any = ((<any>_co.monthOnSelect($event)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i11.View_MonthPickerComponent_0,i11.RenderType_MonthPickerComponent)),i0.ɵdid(49152,
      (null as any),0,i12.MonthPickerComponent,([] as any[]),{month:[0,'month'],color:[1,
          'color'],monthFormat:[2,'monthFormat']},{onSelect:'onSelect'}),(_l()(),i0.ɵted((null as any),
      ['\n      '])),(_l()(),i0.ɵted((null as any),['\n    ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.monthOpt;
    const currVal_1:any = _co._d.color;
    const currVal_2:any = ((_co._options == null)? (null as any): _co._options.monthPickerFormat);
    _ck(_v,2,0,currVal_0,currVal_1,currVal_2);
  },(null as any));
}
export function View_CalendarComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵpid(0,i5.DatePipe,[i0.LOCALE_ID]),(_l()(),i0.ɵted((null as any),
      ['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),9,'div',[['class',
      'title']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_CalendarComponent_1)),i0.ɵdid(16384,(null as any),
          0,i5.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf'],ngIfElse:[1,
              'ngIfElse']},(null as any)),(_l()(),i0.ɵted((null as any),['\n      '])),
      (_l()(),i0.ɵand(0,[['title',2]],(null as any),0,(null as any),View_CalendarComponent_3)),
      (_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_CalendarComponent_4)),i0.ɵdid(16384,(null as any),
          0,i5.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵted((null as any),['\n    \n    '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_CalendarComponent_5)),
      i0.ɵdid(16384,(null as any),0,i5.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf'],ngIfElse:[1,'ngIfElse']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n\n    '])),(_l()(),i0.ɵand(0,[['monthPicker',2]],(null as any),0,(null as any),
          View_CalendarComponent_6)),(_l()(),i0.ɵted((null as any),['\n  ']))],(_ck,
      _v) => {
    var _co:i13.CalendarComponent = _v.component;
    const currVal_0:any = (_co._showMonthPicker? (_co._showMonthPicker || !_co.readonly): false);
    const currVal_1:any = i0.ɵnov(_v,7);
    _ck(_v,5,0,currVal_0,currVal_1);
    const currVal_2:any = _co._showToggleButtons;
    _ck(_v,10,0,currVal_2);
    const currVal_3:any = (_co._view === 'days');
    const currVal_4:any = i0.ɵnov(_v,16);
    _ck(_v,14,0,currVal_3,currVal_4);
  },(null as any));
}
export function View_CalendarComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'ion-calendar',
      ([] as any[]),(null as any),(null as any),(null as any),View_CalendarComponent_0,
      RenderType_CalendarComponent)),i0.ɵprd(5120,(null as any),i10.NG_VALUE_ACCESSOR,
      (p0_0:any) => {
        return [p0_0];
      },[i13.CalendarComponent]),i0.ɵdid(114688,(null as any),0,i13.CalendarComponent,
      [i14.CalendarService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,2,0);
  },(null as any));
}
export const CalendarComponentNgFactory:i0.ComponentFactory<i13.CalendarComponent> = i0.ɵccf('ion-calendar',
    i13.CalendarComponent,View_CalendarComponent_Host_0,{format:'format',type:'type',
        readonly:'readonly',options:'options'},{onChange:'onChange',monthChange:'monthChange'},
    ([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2pzYW5jaGV6L0NvY2t0YWlMYWJzL2lvbjItY2FsZW5kYXIvc3JjL2NvbXBvbmVudHMvY2FsZW5kYXIuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2pzYW5jaGV6L0NvY2t0YWlMYWJzL2lvbjItY2FsZW5kYXIvc3JjL2NvbXBvbmVudHMvY2FsZW5kYXIuY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvanNhbmNoZXovQ29ja3RhaUxhYnMvaW9uMi1jYWxlbmRhci9zcmMvY29tcG9uZW50cy9jYWxlbmRhci5jb21wb25lbnQudHMuQ2FsZW5kYXJDb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2pzYW5jaGV6L0NvY2t0YWlMYWJzL2lvbjItY2FsZW5kYXIvc3JjL2NvbXBvbmVudHMvY2FsZW5kYXIuY29tcG9uZW50LnRzLkNhbGVuZGFyQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiX3Nob3dNb250aFBpY2tlciA/IF9zaG93TW9udGhQaWNrZXIgfHwgIXJlYWRvbmx5IDogZmFsc2VcIiBbbmdJZkVsc2VdPVwidGl0bGVcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBpb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgY2xlYXJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInN3aXRjaC1idG5cIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInN3aXRjaFZpZXcoKVwiPlxuICAgICAgICAgIHt7bW9udGhPcHQub3JpZ2luYWwudGltZSB8IGRhdGU6IF9kLm1vbnRoRm9ybWF0fX1cbiAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCIhcmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFycm93LWRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgW25hbWVdPVwiX3ZpZXcgPT09ICdkYXlzJyA/ICdtZC1hcnJvdy1kcm9wZG93bicgOiAnbWQtYXJyb3ctZHJvcHVwJ1wiPjwvaW9uLWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjdGl0bGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzd2l0Y2gtYnRuXCI+XG4gICAgICAgICAge3ttb250aE9wdC5vcmlnaW5hbC50aW1lIHwgZGF0ZTogX2QubW9udGhGb3JtYXR9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiX3Nob3dUb2dnbGVCdXR0b25zXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBpb24tYnV0dG9uIGNsZWFyIGNsYXNzPVwiYmFja1wiIFtkaXNhYmxlZF09XCIhY2FuQmFjaygpIHx8IHJlYWRvbmx5XCIgKGNsaWNrKT1cInByZXYoKVwiPlxuICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiaW9zLWFycm93LWJhY2tcIj48L2lvbi1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlvbi1idXR0b24gY2xlYXIgY2xhc3M9XCJmb3J3YXJkXCIgW2Rpc2FibGVkXT1cIiFjYW5OZXh0KCkgfHwgcmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJuZXh0KClcIj5cbiAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImlvcy1hcnJvdy1mb3J3YXJkXCI+PC9pb24taWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJfdmlldyA9PT0gJ2RheXMnXCIgW25nSWZFbHNlXT1cIm1vbnRoUGlja2VyXCI+XG4gICAgICA8aW9uLWNhbGVuZGFyLXdlZWsgY29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW3dlZWtBcnJheV09XCJfZC53ZWVrZGF5c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW3dlZWtTdGFydF09XCJfZC53ZWVrU3RhcnRcIj5cbiAgICAgIDwvaW9uLWNhbGVuZGFyLXdlZWs+XG5cbiAgICAgIDxpb24tY2FsZW5kYXItbW9udGggWyhuZ01vZGVsKV09XCJfY2FsZW5kYXJNb250aFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW21vbnRoXT1cIm1vbnRoT3B0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cIm9uQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3BpY2tNb2RlXT1cIl9kLnBpY2tNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbG9yXT1cIl9kLmNvbG9yXCI+XG4gICAgICA8L2lvbi1jYWxlbmRhci1tb250aD5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPG5nLXRlbXBsYXRlICNtb250aFBpY2tlcj5cbiAgICAgIDxpb24tY2FsZW5kYXItbW9udGgtcGlja2VyIFtjb2xvcl09XCJfZC5jb2xvclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21vbnRoRm9ybWF0XT1cIl9vcHRpb25zPy5tb250aFBpY2tlckZvcm1hdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25TZWxlY3QpPVwibW9udGhPblNlbGVjdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttb250aF09XCJtb250aE9wdFwiPlxuICAgICAgPC9pb24tY2FsZW5kYXItbW9udGgtcGlja2VyPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICIsIjxpb24tY2FsZW5kYXI+PC9pb24tY2FsZW5kYXI+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ1VVO01BQUE7TUFBQSxxQ0FBQTsrQkFBQTs7SUFFVTtJQUZWLFdBRVUsU0FGVjs7SUFBQTtJQUFBLFdBQUEsU0FBQTs7OztvQkFSOEYsK0NBQ2hHO01BQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtRQUtRO1VBQUE7VUFBQTtRQUFBO1FBTFI7TUFBQSxpREFBQTtNQUFBO01BSytCLCtEQUU3QjtVQUFBLGtFQUFBO1VBQUE7VUFBQSxlQUV5RixtQ0FDbEY7VUFBQTs7SUFSRDtJQUZSLFdBRVEsU0FGUjtJQU9ZO0lBQVYsV0FBVSxTQUFWOzs7SUFITTtJQUpSLFdBSVEsU0FKUjtJQUsrQjtRQUFBO0lBQUE7Ozs7b0JBT2IsK0NBQ2xCO01BQUE7TUFBQSw0Q0FBd0I7TUFBQSwyQkFFbEI7OztRQUZrQjtZQUFBO1FBQUE7Ozs7b0JBSWUsK0NBQ3ZDO01BQUE7VUFBQTttQkFBQTtRQUFBO1FBQUE7UUFBd0Y7VUFBQTtVQUFBO1FBQUE7UUFBeEY7TUFBQSxpREFBQTtNQUFBO01BQXlHLHFDQUN2RztVQUFBO1VBQUEsbURBQUE7VUFBQTtNQUEyQyxtQ0FDcEM7TUFDVDtVQUFBO1VBQUE7UUFBQTtRQUFBO1FBQ1E7VUFBQTtVQUFBO1FBQUE7UUFEUjtNQUFBLGlEQUFBO1VBQUE7TUFDeUIscUNBQ3ZCO1VBQUE7VUFBQSxpRUFBQTtVQUFBO1VBQUEsZUFBOEMsbUNBQ3ZDO1VBQUE7SUFOd0I7SUFBakMsV0FBaUMsU0FBakM7SUFDWTtJQUFWLFdBQVUsU0FBVjtJQUUrQjtJQUFqQyxXQUFpQyxTQUFqQztJQUVZO0lBQVYsWUFBVSxTQUFWOzs7SUFMa0Q7SUFBcEQsV0FBb0QsU0FBcEQ7SUFDRTtJQUFBLFdBQUEsU0FBQTtJQUVxRDtJQUF2RCxXQUF1RCxTQUF2RDtJQUVFO0lBQUEsWUFBQSxTQUFBOzs7O29CQUswRCw2Q0FDOUQ7TUFBQTtNQUFBO2FBQUE7VUFBQTtNQUU4Qyw2Q0FDMUI7TUFFcEI7VUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBb0I7Y0FBQTtjQUFBO1lBQUE7WUFHQTtjQUFBO2NBQUE7WUFBQTtZQUhwQjtVQUFBLGlFQUFBO1VBQUE7Y0FBQTthQUFBO1FBQUE7TUFBQSw4QkFBQTtVQUFBO1VBQUEsMkNBQUE7VUFBQSxvQ0FBQTtVQUFBLDZDQUt1QztVQUFBLGVBQ2xCOztJQVhGO0lBQ0E7SUFDQTtJQUZuQixXQUFtQixVQUNBLFVBQ0EsU0FGbkI7SUFNb0I7SUFHQTtJQUZBO0lBR0E7SUFMcEIsV0FDb0IsV0FHQSxXQUZBLFdBR0EsVUFMcEI7SUFBb0I7SUFBcEIsV0FBb0IsVUFBcEI7O0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxXQUFBLHFFQUFBOzs7O29CQVN3Qiw2Q0FDeEI7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUUyQjtVQUFBO1VBQUE7UUFBQTtRQUYzQjtNQUFBLCtFQUFBO01BQUE7VUFBQSwrREFHOEM7TUFBQSxlQUNsQjs7SUFERDtJQUhBO0lBQ0E7SUFEM0IsV0FHMkIsVUFIQSxVQUNBLFNBRDNCOzs7OzBEQS9DTjtNQUFBLGFBQ0k7TUFBQTtNQUFtQiw2Q0FDakI7VUFBQSxnRUFBQTtVQUFBO2NBQUEsNEJBWWM7TUFDZDtNQUljLDZDQUNkO1VBQUEsZ0VBQUE7VUFBQTtNQVFjLDJDQUNWO01BRU47YUFBQTtVQUFBLGdEQWFjO1VBQUEsZUFFZDtVQUFBLDJCQU1jOzs7SUFsREM7SUFBa0U7SUFBL0UsV0FBYSxVQUFrRSxTQUEvRTtJQWtCYTtJQUFiLFlBQWEsU0FBYjtJQVdXO0lBQTBCO0lBQXZDLFlBQWEsVUFBMEIsU0FBdkM7Ozs7b0JDL0JKO01BQUE7a0NBQUE7TUFBQTtRQUFBO01BQUEsa0NBQUE7TUFBQTtJQUFBOzs7Ozs7In0=
