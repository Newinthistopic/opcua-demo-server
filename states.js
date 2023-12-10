// Das sind die BITS die gesetzt / gelöscht werden müssen, damit die visuellen "Aktionen" in der HMI funktionieren
const dwStat = {
    TargetScrewSpeedCalculation_direct_specRate: 8, //FLASE: Spec. throughput [kg/h/rpm]    (Throughput [kg/h] / Spec. throughput [kg/h/rpm] = Speed [rpm]    TRUE: Absolut setpoint [rpm]; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325128/udt+Hmi+emExtruderDriveCtrl
    Setpoint_value_is_visible: 11, // TRUE: Setpoint value is visible; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325158/udt+Hmi+cmHmiValues
    Setpoint_input_of_Hmi_is_active: 13,// TRUE: Setpoint input of Hmi is active; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325158/udt+Hmi+cmHmiValues

    MainDrive_On_Off: 11, //TRUE: Main drive is running    FALSE: Main drive is off; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325128/udt+Hmi+emExtruderDriveCtrl
    Lock_On_Off_Status_of_Main_drive_is_running: 9, // Lock Kondition des Extruders Button "ON", wenn bit 9 gesetzt, so kann der Extruder angeschaltet werden

    Show_preheat_temperature_setpoint_on_hmi: 16,// TRUE: Show preheat temperature setpoint on hmi; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3113779313/udt+Hmi+emProcessZone#dwStat

    GearOilLubrication_Button_is_On_Off: 11, // Schaltet visuell ob der Button auf an oder aus steht 
    GearOilLubrication_Button_Lock_OFF_Status: 10, // Setzt die Lockcondition für den Off Button

    Tolerance_monitoring_is_active: 15, //TRUE: Tolerance monitoring is active; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325158/udt+Hmi+cmHmiValues
    Out_of_tolerance_MaxMax: 16, // TRUE: Out of tolerance MaxMax;https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325158/udt+Hmi+cmHmiValues
    Out_of_tolerance_Max: 17, // TRUE: Out of tolerance Max
    Actual_value_tendence_is_down: 23, // TRUE: Actual value tendence is down
    Actual_value_tendence_is_up: 22, // TRUE: Actual value tendence is up
    Tolreances_are_absolute: 14, // TRUE: Tolreances are absolute


    Status_feeder_is_On_Off: 11, // TRUE: Status feeder is on;https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3123576919/udt+Hmi+emFeederRawMaterial
    Feeder_Button_Lock_On_Status: 9,

    Status_AutoStart_Side_Feeder_is_On_Off: 15, // Schaltet visuell den Auto Start Side Feeder Button auf On / Off

    Status_Side_Feeder_is_On_Off: 11, // Schaltet visuell den Side Feeder Button auf On / Off

    
    statemachine: {
        Idle: 5, 
        Running: 3,
        Stopped: 4,
        E_Stop_Pressed: 1,
        E_Stop_Released: 2,
        Preheating: 2
    },
        // Steuert die Icons in den Navigationbar
    statemachine_navigationbar: {
        Stopped: 4,
        Running: 5,
        Warning: 2,
        Error: 1,
        Critical: 0
    },
    startWizzard: {
        Temp_release_Temp_reached_and_soaktime_expired: 6, //TRUE: Temp. release (Temp. reached and soaktime expired); https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3113779313/udt+Hmi+emProcessZone
        Cool_down_is_running: 7, //TRUE: Cool down is running; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3113779313/udt+Hmi+emProcessZone
        Temp_controller_on: 9, // TRUE: Temp. controller on; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3113779313/udt+Hmi+emProcessZone
        Show_remain_time_on_hmi: 15, //TRUE: Show remain time on hmi; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3113779313/udt+Hmi+emProcessZone
    },

    Status_Auto_Start_Feeder_On_Off: 8, // Setz den Button Auto Start Feeder im Pop up Feeding ; X wird blaue oder Haken wird blau
    Lock_On_Off_Status_of_Auto_Stop_Button: 12, // Lockcondition für Autostop Button
    Lock_On_Off_Status_of_Auto_Start_Button: 9, // Lockcondition für Autostart Button
    Status_Auto_Stop_On: 13, // Setz den Button Auto Stop im Pop up Feeding blau
    Status_Auto_Start_On: 10, // Setz den Button Auto Start im Pop up Feeding blau

    Lock_On_Off_Status_of_Start_Button: 6, // Setzt die Lockcondition vom Start Button im Start Wizzard
    Lock_On_Off_Status_of_CoolDown_Button: 24, // Setzt die Lockcondition vom Cool Down Button im Start Wizzard
    Lock_On_Off_Status_of_ShutDown_Button: 13, // Setzt die Lockcondition vom Shutdown Down Button im Start Wizzard

    Lock_On_Off_Status_of_Ramp_On_Button: 1 // Setz die Lockcondition vom Ramp On Button
};

// Hier werden die Bits verwaltet für die Buttons, wenn man "klickt"
const dwCtrl = {
    Speed_calculation_with_spec_throughput: 4, //TRUE (Impulse): Speed calculation with spec. throughput; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325128/udt+Hmi+emExtruderDriveCtrl
    Speed_calculation_with_absolut_speed: 5, // TRUE (Impulse): Speed calculation with absolut speed; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325128/udt+Hmi+emExtruderDriveCtrl

    Extruder_On: 5, // TRUE: Start operation; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3111715028/cmOpStartStop
    Extruder_Off: 6, // TRUE: Stop operation; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3111715028/cmOpStartStop

    Gear_Oil_Lubrication_On: 5, // Impuls für Ölschmiernug an
    Gear_Oil_Lubrication_Off: 6, // Impuls für Ölschmiernug aus

    Feeder_On: 5, // Impuls für den Feeder an
    Feeder_Off: 6, // Impuls für den Feeder aus

    Feeding_Auto_Start_Feeder_On_Off: 8, // Impuls für den Auto Start Feeder Button im Pop Up Feeding
    Feeding_Auto_Stop: 6, // Impuls für den Auto Stop Button im Pop Up Feeding
    Feeding_Auto_Start: 5, // Impuls für den Auto Start Button im Pop Up Feeding
    Feeding_Stop_Feeding: 3, // Impuls für den Stop Feeding Button im Pop Up Feeding

    Auto_Start_Side_Feeder_On_Off: 15, // Impuls für den Auto Start Side Feeder Button im Start Wizzard unter Start Extruder

    Side_Feeder_On: 5,// Impuls für den Side Feeder On , Button im Start Wizzard unter Start Extruder
    Side_Feeder_Off: 6, // Impuls für den Side Feeder Off , Button im Start Wizzard unter Start Extruder

    Apply_Changes: 15, // Impuls über die "Prozente" von New Set auf Set zu übernehmen, wird im Feeder Line Mode benötigt

    StartWizzard_start: 7, // Impuls für den Start Button im Start Wizzard
    StartWizzard_coolDown: 15, // Impuls für den Cool Down Button im Start Wizzard
    StartWizzard_shutDown: 17, // Impuls für den Shutdown Down Button im Start Wizzard

    Line_Ramp_Off: 3, // Impuls für den Ramp Off Button, wird im Line Modus benötigt
    Line_Ramp_On: 1 // Impuls für den Ramp On Button, wird im Line Modus benötigt

}

const Alarms_Warnings = {
    Extruder_Drive_Control: {
        Warning_Torque_too_high_shutdown_timer_started: 10, // Auswahl der Warnung, die dann angezeigt wird, durch wMessage
        Warning_Torque_too_low_shutdown_timer_started: 11, // Auswahl der Warnung, die dann angezeigt wird, durch wMessage
        Alarm_Torque_too_high_delay_shutdown_time_expired: 5, // Auswahl der Warnung, die dann angezeigt wird, durch wMessage
        Alarm_Torque_too_low_delay_shutdown_time_expired: 6,// Auswahl der Warnung, die dann angezeigt wird, durch wMessage
    }
}

const feeders = [
    null, // Platzhalter für Index 0
    { FeederLineMode: false, FeederSingleMode: true, FeederRecyclingMode: false, FeederSetupMode: false, FeederisRunning: false, FeederisOff: true }, // Zustand für Feeder 1 für alle Modi
    { FeederLineMode: false, FeederSingleMode: true, FeederRecyclingMode: false, FeederSetupMode: false, FeederisRunning: false, FeederisOff: true }, // Zustand für Feeder 2 für alle Modi
    { FeederLineMode: false, FeederSingleMode: true, FeederRecyclingMode: false, FeederSetupMode: false, FeederisRunning: false, FeederisOff: true }, // Zustand für Feeder 3 für alle Modi
    { FeederLineMode: false, FeederSingleMode: true, FeederRecyclingMode: false, FeederSetupMode: false, FeederisRunning: false, FeederisOff: true }  // Zustand für Feeder 4 für alle Modi
]

const status_Alarms_Warnings = {
    Extruder_Drive_Control: {
        status_Warning_Torque_too_low_shutdown_timer_started: false, // Zustand darüber, ob die Warnung aktiv ist
        status_Warning_Torque_too_high_shutdown_timer_started: false, // Zustand darüber, ob die Warnung aktiv ist
    }
}

const Process_states = {
    Heating_is_On: false, // Heizen ist an
    Cooling_is_On: false, // Kühlen ist an
    Cooling_is_Off: true, // Kühlen ist aus
    Shutdown_is_On: false, // Abschaltmodus ist an

    Extruder_is_On: false, // Extruder (Drehzahl) ist an
    Extruder_is_Off: true, // Extruder (Drehzahl) ist ais

    Feeding_is_On: false, // bezieht sich auf alle Feder, sobald ein Feeder an ist, egal welchen Modus

    Feeder_Ramp_Mode_is_On: false, // Feeder Ramp Mode , wenn die Feeder im Line Modus sind
    Feeder_Ramp_Mode_is_Off: true, // Feeder Ramp Mode , wenn die Feeder im Line Modus sind

    simulate_Feeder_Weight_is_Running: false, // Sagt aus, ob die Funktion 

    Gear_Oil_Lubrication_On: false, // Ölschmierung ist an
    Gear_Oil_Lubrication_Off: true, // Ölschmierung ist aus
    GearOilRemainPreRunTimeExpired: false, // Der Timer für die Ölschmierung ist abgelaufen, danach kann der Extruder gestartet werden
    GearOilRemainTimeFollowUpExpired: false, // Der Timer für die Nachlaufzeit ist abgelaufen

    Speed_Calculation_Direct_is_On: true, // Berechnung Zieldrehzahl Direkt
    Speed_Calculation_Spec_Rate_is_On: false, // Berechnung Zieldrehzahl in Abhängigkeit vom Gesamtfeederdurchsatz

    Prozesszones_Are_Ready: false, // Zustand, wenn alle Prozesszonen, Ready sind. Dann sind die Icons auch alle Ready
    Prozesszones_Are_Off: false, // Zustand, wenn alle Prozesszonen aus sind, alle Icons stehen auf Off

    Side_Feeder_is_On: false, // Side Feeder ist an
    Side_Feeder_is_Off: true, // Side Feeder ist aus

    Auto_Start_Side_Feeder_is_On: false, // Auto Start für den Side Feeder ist an
    Auto_Start_Side_Feeder_is_Off: true, // Auto Start für den Side Feeder ist aus
}

// Trigger für den Stop aller Funktionen, die zum Feedersystem gehören. Triggerpunkt ist "Stop Feeding Button im Pop Up Feeding", alle Funktionen werden gestopt, bzw die Intervalle davon
const intervalIds = {
    stop_Simulate_Feeder_Single: false,
    stop_Simulate_Feeder_Weight: false,
    stop_simulate_Line_Mode: false,
    stop_Adjust_Throughput: false,
    stop_Simulate_Throughput_Ramp_Line: false,
}

feeding_auto_start= {
    auto_Stop: true, // Zustand darüber, ob der Button von Auto Stop im Pop up Feeder an/aus ist, nicht visuell
    auto_Start: false, // Zustand darüber, ob der Button von Auto Stop im Pop up Feeder an/aus ist, nicht visuell
    auto_Start_Feeder: false,  // Zustand darüber, ob der Button von Auto Stop im Pop up Feeder an/aus ist, nicht visuell
    stop_Feeding: false // Zustand darüber, ob der Button von Auto Stop im Pop up Feeder an/aus ist, nicht visuell
},

module.exports = {
    dwStat,
    dwCtrl,
    Alarms_Warnings,
    status_Alarms_Warnings,
    intervalIds,
    Process_states,
    feeders,
    feeding_auto_start

   
};

