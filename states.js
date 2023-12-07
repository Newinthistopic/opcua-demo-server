const dwStat = {
    TargetScrewSpeedCalculation_direct_specRate: 8, //FLASE: Spec. throughput [kg/h/rpm]    (Throughput [kg/h] / Spec. throughput [kg/h/rpm] = Speed [rpm]    TRUE: Absolut setpoint [rpm]; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325128/udt+Hmi+emExtruderDriveCtrl
    Setpoint_value_is_visible: 11, // TRUE: Setpoint value is visible; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325158/udt+Hmi+cmHmiValues
    Setpoint_input_of_Hmi_is_active: 13,// TRUE: Setpoint input of Hmi is active; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325158/udt+Hmi+cmHmiValues

    MainDrive_On_Off: 11, //TRUE: Main drive is running    FALSE: Main drive is off; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325128/udt+Hmi+emExtruderDriveCtrl
    Lock_On_Off_Status_of_Main_drive_is_running: 9, // Lock Kondition des Extruders Button "ON", wenn bit 9 gesetzt, so kann der Extruder angeschaltet werden

    Show_preheat_temperature_setpoint_on_hmi: 16,// TRUE: Show preheat temperature setpoint on hmi; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3113779313/udt+Hmi+emProcessZone#dwStat

    GearOilLubrication_Button_is_On_Off: 11,
    GearOilLubrication_Button_Lock_OFF_Status: 10,

    Tolerance_monitoring_is_active: 15, //TRUE: Tolerance monitoring is active; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325158/udt+Hmi+cmHmiValues
    Out_of_tolerance_MaxMax: 16, // TRUE: Out of tolerance MaxMax;https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325158/udt+Hmi+cmHmiValues
    Out_of_tolerance_Max: 17, // TRUE: Out of tolerance Max
    Actual_value_tendence_is_down: 23, // TRUE: Actual value tendence is down
    Actual_value_tendence_is_up: 22, // TRUE: Actual value tendence is up
    Tolreances_are_absolute: 14, // TRUE: Tolreances are absolute


    Status_feeder_is_On_Off: 11, // TRUE: Status feeder is on;https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3123576919/udt+Hmi+emFeederRawMaterial
    Feeder_Button_Lock_On_Status: 9,

    Status_AutoStart_Side_Feeder_is_On_Off: 15,

    Status_Side_Feeder_is_On_Off: 11,

    statemachine: {
        Idle: 5,
        Running: 3,
        Stopped: 4,
        E_Stop_Pressed: 1,
        E_Stop_Released: 2,
        Preheating: 2
    }
    ,
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
    Status_Auto_Start_On_Off: 8,
    Lock_On_Off_Status_of_AutoStop_Button: 12,
    Lock_On_Off_Status_of_AutoStart_Button: 9,
    Status_Auto_Stop_On: 13,
    Status_Auto_Start_On: 10,

    Lock_On_Off_Status_of_Start_Button: 6,
    Lock_On_Off_Status_of_CoolDown_Button: 24,
    Lock_On_Off_Status_of_ShutDown_Button: 13,

    Lock_On_Off_Status_of_RampOn_Button: 1
};
const dwCtrl = {
    Speed_calculation_with_spec_throughput: 4, //TRUE (Impulse): Speed calculation with spec. throughput; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325128/udt+Hmi+emExtruderDriveCtrl
    Speed_calculation_with_absolut_speed: 5, // TRUE (Impulse): Speed calculation with absolut speed; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325128/udt+Hmi+emExtruderDriveCtrl

    Extruder_On: 5, // TRUE: Start operation; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3111715028/cmOpStartStop
    Extruder_Off: 6, // TRUE: Stop operation; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3111715028/cmOpStartStop

    Gear_Oil_Lubrication_On: 5,
    Gear_Oil_Lubrication_Off: 6,

    Feeder_On: 5,
    Feeder_Off: 6,

    Feeding_Auto_Start_Feeder_On_Off: 8,
    Feeding_Auto_Stop: 6,
    Feeding_Auto_Start: 5,
    Feeding_Stop_Feeding: 3,

    AutoStart_Side_Feeder_On_Off: 15,

    Side_Feeder_On: 5,
    Side_Feeder_Off: 6,

    Apply_Changes: 15,

    StartWizzard_start: 7,
    StartWizzard_coolDown: 15,
    StartWizzard_shutDown: 17,

    Line_Ramp_Off: 3,
    Line_Ramp_On: 1

}

const Alarms_Warnings = {
    Extruder_Drive_Control: {
        Warning_Torque_too_high_shutdown_timer_started: 10,
        Warning_Torque_too_low_shutdown_timer_started: 11,
        Alarm_Torque_too_high_delay_shutdown_time_expired: 5,
        Alarm_Torque_too_low_delay_shutdown_time_expired: 6,
    }
}

const feeders = [
    null, // Platzhalter für Index 0
    { FeederLineMode: false, FeederSingleMode: true, FeederRecyclingMode: false, FeederSetupMode: false, FeederisRunning: false, FeederisOff: true }, // Zustand für Feeder 1
    { FeederLineMode: false, FeederSingleMode: true, FeederRecyclingMode: false, FeederSetupMode: false, FeederisRunning: false, FeederisOff: true }, // Zustand für Feeder 2
    { FeederLineMode: false, FeederSingleMode: true, FeederRecyclingMode: false, FeederSetupMode: false, FeederisRunning: false, FeederisOff: true }, // Zustand für Feeder 3
    { FeederLineMode: false, FeederSingleMode: true, FeederRecyclingMode: false, FeederSetupMode: false, FeederisRunning: false, FeederisOff: true }  // Zustand für Feeder 4
]

const dwStat_status_Alarms_Warnings = {
    Extruder_Drive_Control: {
        status_Warning_Torque_too_low_shutdown_timer_started: false,
        status_Warning_Torque_too_high_shutdown_timer_started: false,
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
module.exports = {
    dwStat,
    dwCtrl,
    Alarms_Warnings,
    dwStat_status_Alarms_Warnings,
    intervalIds,
    Process_states,
    feeders,


    feeding_auto_start: {
        auto_Stop: true,
        auto_Start: false,
        auto_Start_Feeder: false,  // false für "X", true für "✔"
        stop_Feeding: false
    },




};

