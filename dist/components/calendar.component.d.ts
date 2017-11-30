import { OnInit, EventEmitter } from '@angular/core';
import { CalendarMonth, CalendarModalOptions, CalendarComponentOptions, CalendarDay } from '../calendar.model';
import { CalendarService } from "../services/calendar.service";
import { ControlValueAccessor } from '@angular/forms';
export declare const ION_CAL_VALUE_ACCESSOR: any;
export declare class CalendarComponent implements ControlValueAccessor, OnInit {
    calSvc: CalendarService;
    _d: CalendarModalOptions;
    _options: CalendarComponentOptions;
    _view: string;
    _calendarMonthValue: any[];
    _showToggleButtons: boolean;
    _showMonthPicker: boolean;
    monthOpt: CalendarMonth;
    format: string;
    type: 'string' | 'js-date' | 'moment' | 'time' | 'object';
    readonly: boolean;
    onChange: EventEmitter<any>;
    monthChange: EventEmitter<any>;
    options: CalendarComponentOptions;
    _onChanged: Function;
    _onTouched: Function;
    constructor(calSvc: CalendarService);
    ionViewDidLoad(): void;
    ngOnInit(): void;
    initOpt(): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    createMonth(date: number): CalendarMonth;
    switchView(): string;
    prev(): void;
    next(): void;
    prevYear(): void;
    nextYear(): void;
    nextMonth(): void;
    canNext(): boolean;
    backMonth(): void;
    canBack(): boolean;
    monthOnSelect(month: number): void;
    onChanged($event: any[]): void;
    _writeValue(value: any): void;
    _createCalendarDay(value: any): CalendarDay;
    _handleType(value: number): any;
}
