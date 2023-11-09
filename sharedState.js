
let InitialValueRemainTimeFollowUp = null;

module.exports = {
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

