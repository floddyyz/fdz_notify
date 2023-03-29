function Notify(message, duration)
    SendNUIMessage({
        action = 'notification',
        message = message,
        duration = duration or 5000
    })
end

RegisterCommand('notify', function()
    TriggerEvent('fdz_notify:notify', "This is a test", duration)
end)

CreateThread(function()
    while true do
        local ms = 1000
        SendNUIMessage({
            action = 'checkRadar',
            map = IsRadarEnabled()
        })
        Wait(ms)
    end
end)

exports('SendNotification', Notify)
RegisterNetEvent("fdz_notify:notify", Notify)