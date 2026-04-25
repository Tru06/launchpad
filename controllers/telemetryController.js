// Initial mock data based on LaunchPad landing page
const getTelemetryData = (req, res) => {
    try {
        const telemetry = {
            missionsCompleted: 124,
            successRate: "99.9%",
            tonsDeployed: "45k",
            avgLatencyMs: 12
        };
        res.status(200).json({
            success: true,
            data: telemetry
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error fetching telemetry data'
        });
    }
};

module.exports = {
    getTelemetryData
};
