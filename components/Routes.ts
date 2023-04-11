import Calendar from "../tabs/Calendar";
import History from "../tabs/History/History";
import Report from "../tabs/Report";
import Settings from "../tabs/Settings";
import Today from "../tabs/Today/index";

export const Routes = [
	{
		name: "TodayTab",
		component: Today,
		label: "Today",
		icon: "time",
	},
	{
		name: "CalendarTab",
		component: Calendar,
		label: "Calendar",
		icon: "calendar",
	},
	{
		name: "HistoryTab",
		component: History,
		label: "History",
		icon: "list",
	},
	{
		name: "ReportTab",
		component: Report,
		label: "Report",
		icon: "pie-chart",
	},
	{
		name: "SettingsTab",
		component: Settings,
		label: "Settings",
		icon: "settings",
	},
];
