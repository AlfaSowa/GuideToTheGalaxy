import {
	Table,
	Caption,
	TableBody,
	TableHead,
	TableRow,
	TableСell,
} from '../../components/lib/table/table.component';
import style from './frontpage.module.scss';

const FrontPage = (): JSX.Element => {
	return (
		<div>
			<Table>
				<Caption>ПЛУТ</Caption>

				<TableHead>
					<TableRow>
						<TableСell>Уровень</TableСell>
						<TableСell>Бонус мастерства</TableСell>
						<TableСell>Скрытая атака</TableСell>
						<TableСell>Умения</TableСell>
					</TableRow>
				</TableHead>

				<TableBody>
					<TableRow>
						<TableСell>1</TableСell>
						<TableСell>+2</TableСell>
						<TableСell>1к6</TableСell>
						<TableСell>
							Компетентность, Скрытая атака, Воровской жаргон
						</TableСell>
					</TableRow>

					<TableRow>
						<TableСell>2</TableСell>
						<TableСell>+2</TableСell>
						<TableСell>1к6</TableСell>
						<TableСell>Хитрое действие</TableСell>
					</TableRow>

					<TableRow>
						<TableСell>3</TableСell>
						<TableСell>+2</TableСell>
						<TableСell>2к6</TableСell>
						<TableСell>Архетип плута</TableСell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
};

export default FrontPage;
