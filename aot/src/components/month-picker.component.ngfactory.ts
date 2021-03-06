/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from '../../../src/components/month-picker.component';
const styles_MonthPickerComponent:any[] = ([] as any[]);
export const RenderType_MonthPickerComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_MonthPickerComponent,data:{}});
function View_MonthPickerComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',[['class',
      'month-packer-item']],[[2,'this-month',(null as any)]],(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'button',[['type','button']],
          (null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co._onSelect(_v.context.index)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['',''])),
      (_l()(),i0.ɵted((null as any),['\n      ']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = ((_v.context.index === _co._thisMonth.getMonth()) && (_co.month.original.year === _co._thisMonth.getFullYear()));
    _ck(_v,0,0,currVal_0);
    const currVal_1:any = _v.context.$implicit;
    _ck(_v,3,0,currVal_1);
  });
}
export function View_MonthPickerComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),4,'div',([] as any[]),[[8,'className',0]],(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),
      i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_MonthPickerComponent_1)),
      i0.ɵdid(802816,(null as any),0,i1.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵted((null as any),['\n  ']))],(_ck,_v) => {
    var _co:i2.MonthPickerComponent = _v.component;
    const currVal_1:any = _co._monthFormat;
    _ck(_v,4,0,currVal_1);
  },(_ck,_v) => {
    var _co:i2.MonthPickerComponent = _v.component;
    const currVal_0:any = ('month-picker ' + _co.color);
    _ck(_v,1,0,currVal_0);
  });
}
export function View_MonthPickerComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'ion-calendar-month-picker',
      ([] as any[]),(null as any),(null as any),(null as any),View_MonthPickerComponent_0,
      RenderType_MonthPickerComponent)),i0.ɵdid(49152,(null as any),0,i2.MonthPickerComponent,
      ([] as any[]),(null as any),(null as any))],(null as any),(null as any));
}
export const MonthPickerComponentNgFactory:i0.ComponentFactory<i2.MonthPickerComponent> = i0.ɵccf('ion-calendar-month-picker',
    i2.MonthPickerComponent,View_MonthPickerComponent_Host_0,{month:'month',color:'color',
        monthFormat:'monthFormat'},{onSelect:'onSelect'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2pzYW5jaGV6L0NvY2t0YWlMYWJzL2lvbjItY2FsZW5kYXIvc3JjL2NvbXBvbmVudHMvbW9udGgtcGlja2VyLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9qc2FuY2hlei9Db2NrdGFpTGFicy9pb24yLWNhbGVuZGFyL3NyYy9jb21wb25lbnRzL21vbnRoLXBpY2tlci5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9qc2FuY2hlei9Db2NrdGFpTGFicy9pb24yLWNhbGVuZGFyL3NyYy9jb21wb25lbnRzL21vbnRoLXBpY2tlci5jb21wb25lbnQudHMuTW9udGhQaWNrZXJDb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2pzYW5jaGV6L0NvY2t0YWlMYWJzL2lvbjItY2FsZW5kYXIvc3JjL2NvbXBvbmVudHMvbW9udGgtcGlja2VyLmNvbXBvbmVudC50cy5Nb250aFBpY2tlckNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgIDxkaXYgW2NsYXNzXT1cIidtb250aC1waWNrZXIgJyArIGNvbG9yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9udGgtcGFja2VyLWl0ZW1cIlxuICAgICAgICAgICBbY2xhc3MudGhpcy1tb250aF09XCJcbiAgICAgICAgICAgaSA9PT0gX3RoaXNNb250aC5nZXRNb250aCgpIFxuICAgICAgICAgICAmJiBtb250aC5vcmlnaW5hbC55ZWFyID09PSBfdGhpc01vbnRoLmdldEZ1bGxZZWFyKClcIlxuICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfbW9udGhGb3JtYXQ7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIl9vblNlbGVjdChpKVwiPnt7aXRlbX19PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgIiwiPGlvbi1jYWxlbmRhci1tb250aC1waWNrZXI+PC9pb24tY2FsZW5kYXItbW9udGgtcGlja2VyPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztvQkNFTTtNQUFBO01BQUEsOEJBSXNEO01BQ3BEO1VBQUE7WUFBQTtZQUFBO1lBQXNCO2NBQUE7Y0FBQTtZQUFBO1lBQXRCO1VBQUEsZ0NBQTZDO01BQWlCOztJQUozRDtJQURMLFdBQ0ssU0FETDtJQUsrQztJQUFBOzs7O29CQVByRCwyQ0FDSTtNQUFBO01BQUEsOEJBQXVDLDZDQUNyQzthQUFBO2FBQUE7NEJBQUEseUNBTU07VUFBQSxhQUNGOztJQUhDO0lBSkwsV0FJSyxTQUpMOzs7SUFERztJQUFMLFdBQUssU0FBTDs7OztvQkNESjtNQUFBO3FDQUFBLFVBQUE7TUFBQTs7OzsifQ==
