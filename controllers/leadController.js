// In-memory mock database for leads
let leads = [];

const submitLead = (req, res) => {
    try {
        const { email, tier, name, message } = req.body;

        if (!email || !tier) {
            return res.status(400).json({
                success: false,
                message: 'Please provide at least an email and a selected tier.'
            });
        }

        const newLead = {
            id: Date.now(),
            email,
            tier,
            name: name || '',
            message: message || '',
            createdAt: new Date().toISOString()
        };

        leads.push(newLead);

        // Logging to simulate saving to DB
        console.log(`New lead received for ${tier} tier from ${email}`);

        res.status(201).json({
            success: true,
            message: 'Lead successfully captured!',
            data: newLead
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error processing lead submission'
        });
    }
};

// Optional: Endpoint to view leads (for admin purposes, normally secured)
const getLeads = (req, res) => {
    res.status(200).json({
        success: true,
        data: leads
    });
};

module.exports = {
    submitLead,
    getLeads
};
