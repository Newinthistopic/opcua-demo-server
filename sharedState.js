
let InitialValueRemainTimeFollowUp = null;


const BIT_POSITIONS = {
    TargetScrewSpeedCalculation_direct_specRate:8, //FLASE: Spec. throughput [kg/h/rpm]    (Throughput [kg/h] / Spec. throughput [kg/h/rpm] = Speed [rpm]    TRUE: Absolut setpoint [rpm]; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325128/udt+Hmi+emExtruderDriveCtrl
    Setpoint_value_is_visible: 11, // TRUE: Setpoint value is visible; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325158/udt+Hmi+cmHmiValues
    Setpoint_input_of_Hmi_is_active:13 ,// TRUE: Setpoint input of Hmi is active; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325158/udt+Hmi+cmHmiValues
    MainDrive_On_Off: 11, //TRUE: Main drive is running    FALSE: Main drive is off; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325128/udt+Hmi+emExtruderDriveCtrl

    GearOilLubrication_Button_is_On_Off:11,
    GearOilLubrication_Button_Lock_OFF_Status:10,
   
    
  };

  const buttonPushed={
    Speed_calculation_with_spec_throughput:16, //TRUE (Impulse): Speed calculation with spec. throughput; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325128/udt+Hmi+emExtruderDriveCtrl
    Speed_calculation_with_absolut_speed:32, // TRUE (Impulse): Speed calculation with absolut speed; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325128/udt+Hmi+emExtruderDriveCtrl

    ExtruderOn:32, // TRUE: Start operation; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3111715028/cmOpStartStop
    ExtruderOff:64, // TRUE: Stop operation; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3111715028/cmOpStartStop

    GearOilLubricationOn:32,
    GearOilLubricationOff:64,
  }



module.exports = {
    BIT_POSITIONS,
    buttonPushed,
    HeatingisOn: false,
    CoolingisOn: false,
    CoolingisOff: true,
    ShutdownisOn: false,

    ExtruderisOn: false,
    ExtruderisOff: true,

    FeedingisOn: false, // bezieht sich auf alle Feder, sobald ein Feeder an ist, egal welchen Modus

    SideFeederisOn: false,
    SideFeederisOff: true,
    minimumOneFeederLineMode: false,
    FeederRampModeisOn: false,
    FeederRampModeisOff: true,
    stopStartFeeder:false,

    simulateFeederWeightisRunning:false,

    feeders: [
        null,  // Platzhalter für Index 0
        { FeederLineMode: false, FeederSingleMode: true, FeederRecyclingMode: false, FeederSetupMode: false, FeederisRunning: false, FeederisOff: true },  // Zustand für Feeder 1
        { FeederLineMode: false, FeederSingleMode: true, FeederRecyclingMode: false, FeederSetupMode: false, FeederisRunning: false, FeederisOff: true },  // Zustand für Feeder 2
        { FeederLineMode: false, FeederSingleMode: true, FeederRecyclingMode: false, FeederSetupMode: false, FeederisRunning: false, FeederisOff: true },  // Zustand für Feeder 3
        { FeederLineMode: false, FeederSingleMode: true, FeederRecyclingMode: false, FeederSetupMode: false, FeederisRunning: false, FeederisOff: true }   // Zustand für Feeder 4
    ],
    

    feedingautostartButtons: {

        autoStop: true,
        autoStart: false,
        autoStartFeeder: false,  // false für "X", true für "✔"
        stopFeeding:false

    },

    
    intervalIds: {
        stopSimulateFeederSingle: false,
        stopSimulateFeederLine:false,
        stopSimulateFeederWeight: false,
        stopsimulateLineMode: false,
        stopAdjustThroughput: false,
        stopSimulateLineMode: false,
        stopSimulateThroughputRampLine: false,
        
      },


    SpeedCalculationDirectisOn: true,
    SpeedCalculationSpecRateisOn: false,


    AutoStartSideFeederisOn: false,
    AutoStartSideFeederisOff: true,



    ProzesszonesAreReady: false,
    ProzesszonesAreOff: false,


    GearOilLubricationOn: false,
    GearOilLubricationOff: true,
    GearOilRemainPreRunTimeExpired: false,
    GearOilRemainTimeFollowUpExpired: false,

    InitialValueRemainTimeFollowUp: InitialValueRemainTimeFollowUp


};

